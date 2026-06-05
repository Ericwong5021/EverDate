import { useState } from "react";
import type { BlessingStyle } from "../types/blessing";
import { BLESSING_STYLE_LABELS, BLESSING_STYLE_OPTIONS } from "../types/blessing";
import { generateBlessing } from "../api/generate";

export default function BlessingGenerator() {
  const [story, setStory] = useState("");
  const [style, setStyle] = useState<BlessingStyle>("romantic");
  const [blessing, setBlessing] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!story.trim()) {
      setError("请输入你的故事或纪念日信息");
      return;
    }

    setLoading(true);
    setError("");
    setBlessing("");

    try {
      const result = await generateBlessing(story.trim(), style);
      setBlessing(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "生成失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(blessing);
      alert("已复制到剪贴板");
    } catch {
      alert("复制失败，请手动复制");
    }
  };

  return (
    <div className="space-y-6">
      {/* Story Input */}
      <div>
        <label className="mb-2 block text-sm font-medium text-rose-700">你的故事或纪念日信息</label>
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="例如：我们是在大学图书馆认识的，那天她正在看一本村上春树的书..."
          rows={4}
          className="w-full resize-none rounded-xl border border-rose-200 bg-white/50 px-4 py-3 text-rose-900 placeholder-rose-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 focus:outline-none"
          style={{ fontFamily: "var(--font-body)" }}
        />
      </div>

      {/* Style Selection */}
      <div>
        <label className="mb-3 block text-sm font-medium text-rose-700">选择风格</label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {BLESSING_STYLE_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setStyle(option.value)}
              className={`rounded-xl border-2 px-3 py-2 text-sm transition-all ${
                style === option.value
                  ? "border-rose-500 bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                  : "border-rose-200 bg-white/50 text-rose-600 hover:border-rose-300 hover:bg-rose-50"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              <div className="font-medium">{option.label}</div>
              <div className="mt-0.5 text-xs opacity-80">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        disabled={loading || !story.trim()}
        className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 font-medium text-white shadow-lg shadow-rose-500/30 transition-all hover:from-rose-600 hover:to-pink-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            生成中...
          </span>
        ) : (
          "生成祝福语"
        )}
      </button>

      {/* Error Message */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">{error}</div>
      )}

      {/* Generated Blessing */}
      {blessing && (
        <div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-rose-600">
              {BLESSING_STYLE_LABELS[style]}风格
            </span>
            <button
              onClick={handleCopy}
              className="rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600 transition-colors hover:bg-rose-200"
            >
              复制
            </button>
          </div>
          <p
            className="text-lg leading-relaxed whitespace-pre-wrap text-rose-800"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {blessing}
          </p>
        </div>
      )}
    </div>
  );
}
