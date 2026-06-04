import type { Metadata } from "next";
import { Playfair_Display, Noto_Serif_SC, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EverDate - 让每一个纪念日都被记住",
  description:
    "EverDate 是一款智能纪念日管理工具，提供倒计时、智能提醒、AI 祝福语生成和邮件投递服务，让爱与纪念永不褪色。",
  keywords: ["纪念日", "倒计时", "提醒", "AI祝福", "EverDate", "浪漫"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${playfair.variable} ${notoSerifSC.variable} ${inter.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
