export interface Anniversary {
  id: string;
  title: string;
  date: string;
  type: AnniversaryType;
  partnerName: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export type AnniversaryType =
  | "wedding"
  | "dating"
  | "birthday"
  | "engagement"
  | "first-meet"
  | "other";

export interface EmailConfig {
  id: string;
  anniversaryId: string;
  recipientEmail: string;
  recipientName: string;
  subject: string;
  body: string;
  photos: string[];
  sendAt: string;
  status: "pending" | "sent" | "failed";
  createdAt: string;
}

export interface AIGreeting {
  id: string;
  style: GreetingStyle;
  content: string;
  anniversaryId: string;
}

export type GreetingStyle = "romantic" | "warm" | "humorous" | "literary" | "simple";

export interface PaymentOrder {
  id: string;
  anniversaryId: string;
  amount: number;
  currency: string;
  method: "wechat" | "alipay";
  status: "pending" | "paid" | "refunded";
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
