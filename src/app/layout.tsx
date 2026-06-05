import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EverDate - 纪念日惊喜助手",
  description: "智能纪念日倒计时与惊喜邮件服务",
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
