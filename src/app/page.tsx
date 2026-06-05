import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-5xl font-bold text-red-500">EverDate</h1>
      <p className="mb-8 text-xl text-gray-600">让每个纪念日都不被遗忘</p>
      <p className="mb-8 max-w-md text-gray-500">
        设置重要的纪念日，在当天自动向对方发送一封精心准备的邮件。
        支持自定义标题、正文和照片，让每一份心意准时送达。
      </p>
      <div className="flex gap-4">
        <Link
          href="/dashboard"
          className="rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition-colors hover:bg-red-600"
        >
          开始使用
        </Link>
        <Link
          href="/dashboard"
          className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-600 transition-colors hover:border-red-400 hover:text-red-500"
        >
          管理纪念日
        </Link>
      </div>
    </div>
  );
}
