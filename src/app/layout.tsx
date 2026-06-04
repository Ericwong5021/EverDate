import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EverDate - 让每个纪念日都不被遗忘",
  description: "设置纪念日，自动发送邮件给重要的人",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="min-h-screen bg-[#fafafa]">
          <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
              <a href="/" className="text-xl font-bold text-red-500">
                EverDate
              </a>
              <nav className="flex gap-4 text-sm">
                <a
                  href="/"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  首页
                </a>
                <a
                  href="/dashboard"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  管理面板
                </a>
                <a
                  href="/logs"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  发送记录
                </a>
              </nav>
            </div>
          </header>
          <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
