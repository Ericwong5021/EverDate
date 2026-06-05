import { Link } from "react-router-dom";
import BlessingGenerator from "../components/BlessingGenerator";

export default function BlessingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <Link
          to="/"
          className="mb-4 inline-flex items-center text-sm text-rose-400 hover:text-rose-600"
        >
          <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          返回首页
        </Link>
        <h1
          className="text-3xl font-bold text-rose-800"
          style={{ fontFamily: "var(--font-display)" }}
        >
          AI 祝福语生成
        </h1>
        <p className="mt-2 text-rose-500" style={{ fontFamily: "var(--font-body)" }}>
          为你的纪念日生成专属祝福语
        </p>
      </div>

      {/* Generator Card */}
      <div className="w-full max-w-lg">
        <div className="rounded-3xl border border-rose-100/50 bg-white/60 p-8 shadow-xl shadow-rose-100/50 backdrop-blur-xl">
          <BlessingGenerator />
        </div>
      </div>
    </div>
  );
}
