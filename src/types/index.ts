export interface CommemorativeInput {
  userId: string;
  title: string;
  recipientName: string;
  recipientEmail: string;
  month: number;
  day: number;
  year?: number;
  subject: string;
  body: string;
  photoUrl?: string;
  enabled?: boolean;
}

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export type EmailStatus = "pending" | "sending" | "success" | "failed";

export interface SchedulerConfig {
  cronExpression: string;
  timezone: string;
}
