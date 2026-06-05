export interface Anniversary {
  id: string;
  title: string;
  date: string;
  type: AnniversaryType;
  createdAt: string;
  updatedAt: string;
}

export type AnniversaryType = "wedding" | "dating" | "birthday" | "first_meet" | "custom";

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  photos: string[];
  scheduledAt: string;
  status: "pending" | "sent" | "failed";
}

export interface EmailEditor {
  subject: string;
  body: string;
  photos: string[];
  scheduledAt: string;
  recipientEmail: string;
  templateId: string;
  style: EmailStyle;
}

export interface EmailStyle {
  fontFamily: string;
  fontSize: number;
  textColor: string;
  backgroundColor: string;
  accentColor: string;
  layout: "standard" | "centered" | "minimal";
  headerStyle: "default" | "image" | "gradient";
}

export interface EmailPreview {
  subject: string;
  body: string;
  photos: string[];
  recipientEmail: string;
  scheduledAt: string;
  style: EmailStyle;
}

export type FontOption = {
  name: string;
  value: string;
};

export type LayoutOption = {
  id: string;
  name: string;
  description: string;
};

export type ColorOption = {
  name: string;
  value: string;
};

export const FONT_OPTIONS: FontOption[] = [
  { name: "默认", value: "inherit" },
  { name: "优雅", value: "Georgia, serif" },
  { name: "现代", value: "system-ui, sans-serif" },
  { name: "手写", value: "'Comic Sans MS', cursive" },
  { name: "等宽", value: "monospace" },
];

export const LAYOUT_OPTIONS: LayoutOption[] = [
  { id: "standard", name: "标准", description: "传统邮件布局" },
  { id: "centered", name: "居中", description: "居中对齐的现代布局" },
  { id: "minimal", name: "简约", description: "简洁优雅的布局" },
];

export const COLOR_OPTIONS: ColorOption[] = [
  { name: "经典红", value: "#722F37" },
  { name: "玫瑰金", value: "#B76E79" },
  { name: "深蓝", value: "#1E3A8A" },
  { name: "森林绿", value: "#166534" },
  { name: "紫色", value: "#7C3AED" },
  { name: "橙色", value: "#EA580C" },
];
