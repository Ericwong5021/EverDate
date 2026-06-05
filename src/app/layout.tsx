import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EverDate — 纪念日倒计时",
  description: "为你的特别日子，创造浪漫倒计时。每一分每一秒，都是爱的期待。",
  openGraph: {
    title: "EverDate — 纪念日倒计时",
    description: "为你的特别日子，创造浪漫倒计时",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${playfair.variable} h-full antialiased`}>
      <body className="bg-cream flex min-h-full flex-col">{children}</body>
    </html>
  );
}
