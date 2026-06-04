import cron from "node-cron";
import { prisma } from "./prisma";
import { sendEmail } from "./email";

async function processScheduledEmails() {
  const now = new Date();
  const today = { month: now.getMonth() + 1, day: now.getDate() };

  console.log(`[Scheduler] Checking emails for ${today.month}/${today.day}`);

  const commemoratives = await prisma.commemorative.findMany({
    where: {
      enabled: true,
      month: today.month,
      day: today.day,
    },
    include: { emailLogs: true },
  });

  for (const comm of commemoratives) {
    const existingLog = comm.emailLogs.find(
      (log) =>
        log.status === "success" &&
        log.scheduledFor.getFullYear() === now.getFullYear()
    );

    if (existingLog) {
      console.log(
        `[Scheduler] Already sent for ${comm.title} this year, skipping`
      );
      continue;
    }

    const pendingLog = await prisma.emailLog.create({
      data: {
        commemorativeId: comm.id,
        status: "sending",
        scheduledFor: now,
      },
    });

    console.log(`[Scheduler] Sending email for: ${comm.title}`);

    try {
      const result = await sendEmail(
        comm.recipientEmail,
        comm.subject,
        comm.body,
        comm.photoUrl || undefined
      );

      await prisma.emailLog.update({
        where: { id: pendingLog.id },
        data: {
          status: result.success ? "success" : "failed",
          sentAt: result.success ? new Date() : null,
          errorMessage: result.error || null,
        },
      });

      if (result.success) {
        console.log(`[Scheduler] Successfully sent: ${comm.title}`);
      } else {
        console.error(
          `[Scheduler] Failed to send: ${comm.title} - ${result.error}`
        );
      }
    } catch (error) {
      await prisma.emailLog.update({
        where: { id: pendingLog.id },
        data: {
          status: "failed",
          errorMessage:
            error instanceof Error ? error.message : "Unknown error",
        },
      });
      console.error(`[Scheduler] Error sending ${comm.title}:`, error);
    }
  }
}

async function retryFailedEmails() {
  const now = new Date();
  const failedLogs = await prisma.emailLog.findMany({
    where: {
      status: "failed",
      retryCount: { lt: 3 },
    },
    include: { commemorative: true },
  });

  for (const log of failedLogs) {
    if (log.retryCount >= log.maxRetries) continue;

    console.log(
      `[Retry] Attempt ${log.retryCount + 1}/${log.maxRetries} for ${log.commemorative.title}`
    );

    await prisma.emailLog.update({
      where: { id: log.id },
      data: { status: "sending", retryCount: { increment: 1 } },
    });

    const result = await sendEmail(
      log.commemorative.recipientEmail,
      log.commemorative.subject,
      log.commemorative.body,
      log.commemorative.photoUrl || undefined
    );

    await prisma.emailLog.update({
      where: { id: log.id },
      data: {
        status: result.success ? "success" : "failed",
        sentAt: result.success ? new Date() : null,
        errorMessage: result.error || null,
      },
    });
  }
}

// Run every day at 09:00 AM
const DAILY_CRON = "0 9 * * *";
// Retry failed emails every hour
const RETRY_CRON = "0 * * * *";

if (require.main === module) {
  console.log("[Scheduler] Starting EverDate email scheduler");

  cron.schedule(DAILY_CRON, () => {
    processScheduledEmails().catch(console.error);
  });

  cron.schedule(RETRY_CRON, () => {
    retryFailedEmails().catch(console.error);
  });

  console.log("[Scheduler] Daily check scheduled at 09:00");
  console.log("[Scheduler] Retry check scheduled every hour");
}

export { processScheduledEmails, retryFailedEmails };
