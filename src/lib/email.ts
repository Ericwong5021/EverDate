import nodemailer from "nodemailer";
import type { EmailSendResult } from "@/types";

function createTransporter() {
  if (process.env.SENDGRID_API_KEY) {
    return nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
      },
    });
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function buildEmailHtml(subject: string, body: string, photoUrl?: string): string {
  const photoSection = photoUrl
    ? `<div style="text-align:center;margin:20px 0"><img src="${photoUrl}" alt="纪念照片" style="max-width:100%;border-radius:8px" /></div>`
    : "";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#fafafa">
  <div style="background:white;border-radius:12px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
    <h1 style="color:#e74c3c;font-size:24px;text-align:center;margin-bottom:24px">${subject}</h1>
    ${photoSection}
    <div style="font-size:16px;line-height:1.8;color:#333;white-space:pre-wrap">${body}</div>
    <hr style="border:none;border-top:1px solid #eee;margin:32px 0 16px" />
    <p style="color:#999;font-size:12px;text-align:center">EverDate - 让每个纪念日都不被遗忘</p>
  </div>
</body>
</html>`;
}

export async function sendEmail(
  to: string,
  subject: string,
  body: string,
  photoUrl?: string,
): Promise<EmailSendResult> {
  const from = process.env.SENDGRID_FROM || process.env.SMTP_FROM || process.env.SMTP_USER;

  if (!from) {
    return { success: false, error: "No sender email configured" };
  }

  const transporter = createTransporter();

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html: buildEmailHtml(subject, body, photoUrl),
      text: `${subject}\n\n${body}`,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown email error";
    return { success: false, error: message };
  }
}
