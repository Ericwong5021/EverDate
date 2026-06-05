import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import cron from "node-cron";

const router = Router();

// In-memory store for demo (replace with PostgreSQL in production)
interface EmailRecord {
  id: string;
  anniversaryId?: string;
  recipientEmail: string;
  subject: string;
  body: string;
  photos: string[];
  scheduledAt: string | null;
  status: "draft" | "pending" | "sending" | "sent" | "failed";
  retryCount: number;
  maxRetries: number;
  lastError?: string;
  sentAt?: string;
  createdAt: string;
  updatedAt: string;
}

const emails = new Map<string, EmailRecord>();

// ─── Email sending logic (SendGrid integration) ───

async function sendEmailWithRetry(email: EmailRecord): Promise<void> {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || "noreply@everdate.com";

  email.status = "sending";
  emails.set(email.id, email);

  try {
    if (!SENDGRID_API_KEY || SENDGRID_API_KEY === "your-sendgrid-api-key") {
      // Demo mode: simulate sending
      console.log(`[Demo] Sending email to ${email.recipientEmail}: ${email.subject}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      email.status = "sent";
      email.sentAt = new Date().toISOString();
    } else {
      // Production: use SendGrid
      const sgMail = await import("@sendgrid/mail");
      sgMail.default.setApiKey(SENDGRID_API_KEY);

      // Build HTML email body
      const htmlBody = buildEmailHtml(email);

      await sgMail.default.send({
        to: email.recipientEmail,
        from: SENDGRID_FROM_EMAIL,
        subject: email.subject,
        html: htmlBody,
      });

      email.status = "sent";
      email.sentAt = new Date().toISOString();
    }
  } catch (error: any) {
    console.error(`Failed to send email ${email.id}:`, error.message);
    email.lastError = error.message;
    email.retryCount += 1;

    if (email.retryCount < email.maxRetries) {
      email.status = "pending";
      console.log(
        `[Retry ${email.retryCount}/${email.maxRetries}] Email ${email.id} will be retried`
      );
    } else {
      email.status = "failed";
      console.error(`Email ${email.id} failed after ${email.maxRetries} retries`);
    }
  }

  email.updatedAt = new Date().toISOString();
  emails.set(email.id, email);
}

function buildEmailHtml(email: EmailRecord): string {
  const photoHtml =
    email.photos.length > 0
      ? `<div style="margin-top:20px;">${email.photos.map((url) => `<img src="${url}" style="max-width:300px;margin:5px;border-radius:8px;" />`).join("")}</div>`
      : "";

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:20px;color:#333;">
      <h1 style="color:#722F37;text-align:center;">${email.subject}</h1>
      <div style="white-space:pre-wrap;line-height:1.8;font-size:16px;">${email.body}</div>
      ${photoHtml}
      <hr style="margin-top:30px;border:none;border-top:1px solid #eee;" />
      <p style="text-align:center;color:#999;font-size:12px;">
        Sent with 💕 from EverDate
      </p>
    </body>
    </html>
  `;
}

// ─── Cron job: check for scheduled emails every minute ───

cron.schedule("* * * * *", () => {
  const now = new Date();
  for (const email of emails.values()) {
    if (
      email.status === "pending" &&
      email.scheduledAt &&
      new Date(email.scheduledAt) <= now
    ) {
      console.log(`Triggering scheduled email: ${email.id}`);
      sendEmailWithRetry(email);
    }

    // Retry failed emails that haven't exceeded max retries
    if (email.status === "pending" && email.retryCount > 0 && email.retryCount < email.maxRetries) {
      console.log(`Retrying email: ${email.id} (attempt ${email.retryCount + 1})`);
      sendEmailWithRetry(email);
    }
  }
});

// ─── Routes ───

// Create email
router.post("/", (req, res) => {
  const { anniversaryId, recipientEmail, subject, body, photos, scheduledAt } = req.body;

  if (!recipientEmail || !subject) {
    return res.status(400).json({ error: "recipientEmail and subject are required" });
  }

  const id = uuidv4();
  const email: EmailRecord = {
    id,
    anniversaryId,
    recipientEmail,
    subject,
    body: body || "",
    photos: photos || [],
    scheduledAt: scheduledAt || null,
    status: scheduledAt ? "pending" : "draft",
    retryCount: 0,
    maxRetries: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  emails.set(id, email);
  res.status(201).json(email);
});

// Get all emails
router.get("/", (_req, res) => {
  const allEmails = Array.from(emails.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  res.json(allEmails);
});

// Get email by ID
router.get("/:id", (req, res) => {
  const email = emails.get(req.params.id);
  if (!email) {
    return res.status(404).json({ error: "Email not found" });
  }
  res.json(email);
});

// Update email
router.put("/:id", (req, res) => {
  const email = emails.get(req.params.id);
  if (!email) {
    return res.status(404).json({ error: "Email not found" });
  }

  if (email.status === "sent") {
    return res.status(400).json({ error: "Cannot edit a sent email" });
  }

  const updated: EmailRecord = {
    ...email,
    ...req.body,
    id: email.id,
    updatedAt: new Date().toISOString(),
  };

  emails.set(email.id, updated);
  res.json(updated);
});

// Delete email
router.delete("/:id", (req, res) => {
  if (!emails.has(req.params.id)) {
    return res.status(404).json({ error: "Email not found" });
  }
  emails.delete(req.params.id);
  res.status(204).send();
});

// Schedule email
router.post("/:id/schedule", (req, res) => {
  const email = emails.get(req.params.id);
  if (!email) {
    return res.status(404).json({ error: "Email not found" });
  }

  const { sendAt } = req.body;
  if (!sendAt) {
    return res.status(400).json({ error: "sendAt is required" });
  }

  if (new Date(sendAt) <= new Date()) {
    return res.status(400).json({ error: "sendAt must be in the future" });
  }

  email.scheduledAt = sendAt;
  email.status = "pending";
  email.updatedAt = new Date().toISOString();
  emails.set(email.id, email);

  res.json({ message: "Email scheduled successfully", email });
});

// Cancel scheduled email
router.post("/:id/cancel", (req, res) => {
  const email = emails.get(req.params.id);
  if (!email) {
    return res.status(404).json({ error: "Email not found" });
  }

  if (email.status !== "pending") {
    return res.status(400).json({ error: "Can only cancel pending emails" });
  }

  email.status = "draft";
  email.scheduledAt = null;
  email.updatedAt = new Date().toISOString();
  emails.set(email.id, email);

  res.json({ message: "Email cancelled", email });
});

// Send test email immediately
router.post("/:id/test-send", async (req, res) => {
  const email = emails.get(req.params.id);
  if (!email) {
    return res.status(404).json({ error: "Email not found" });
  }

  if (!email.recipientEmail) {
    return res.status(400).json({ error: "No recipient email set" });
  }

  // Clone to avoid modifying the original
  const testEmail = { ...email, retryCount: 0, maxRetries: 1 };
  await sendEmailWithRetry(testEmail);

  res.json({
    message: testEmail.status === "sent" ? "Test email sent successfully" : "Failed to send test email",
    status: testEmail.status,
    error: testEmail.lastError,
  });
});

// Get email logs (status history)
router.get("/logs/all", (_req, res) => {
  const logs = Array.from(emails.values()).map((e) => ({
    id: e.id,
    recipientEmail: e.recipientEmail,
    subject: e.subject,
    status: e.status,
    scheduledAt: e.scheduledAt,
    sentAt: e.sentAt,
    retryCount: e.retryCount,
    lastError: e.lastError,
    createdAt: e.createdAt,
  }));
  res.json(logs);
});

export default router;
