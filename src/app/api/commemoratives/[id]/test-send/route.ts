import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";

export async function POST(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const commemorative = await prisma.commemorative.findUnique({
      where: { id: params.id },
    });

    if (!commemorative) {
      return NextResponse.json(
        { error: "Commemorative not found" },
        { status: 404 }
      );
    }

    const log = await prisma.emailLog.create({
      data: {
        commemorativeId: params.id,
        status: "sending",
        scheduledFor: new Date(),
      },
    });

    const result = await sendEmail(
      commemorative.recipientEmail,
      commemorative.subject,
      commemorative.body,
      commemorative.photoUrl || undefined
    );

    await prisma.emailLog.update({
      where: { id: log.id },
      data: {
        status: result.success ? "success" : "failed",
        sentAt: result.success ? new Date() : null,
        errorMessage: result.error || null,
      },
    });

    return NextResponse.json({
      success: result.success,
      messageId: result.messageId,
      error: result.error,
      logId: log.id,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send test email" },
      { status: 500 }
    );
  }
}
