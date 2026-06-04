import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">EverDate</h1>
      <p className="text-xl text-gray-600 mb-8">让每个纪念日都不被遗忘</p>
      <p className="text-gray-500 max-w-md mb-8">
        设置重要的纪念日，在当天自动向对方发送一封精心准备的邮件。
        支持自定义标题、正文和照片，让每一份心意准时送达。
      </p>
      <div className="flex gap-4">
        <Link
          href="/dashboard"
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          开始使用
        </Link>
        <Link
          href="/dashboard"
          className="border border-gray-300 text-gray-600 px-6 py-3 rounded-lg hover:border-red-400 hover:text-red-500 transition-colors font-medium"
        >
          管理纪念日
        </Link>
      </div>
    </div>
  );
}
