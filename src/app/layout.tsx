import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EverDate — 让重要的日子，准时开出一场惊喜",
  description:
    "设置纪念日倒计时、提前准备提醒、专属待办清单，并在当天为对方送达一封带着照片与祝福的惊喜邮件。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
