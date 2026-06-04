"use client";

import { useState, useCallback } from "react";

interface ShareButtonProps {
  title: string;
  date: string;
}

export default function ShareButton({ title, date }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const handleShare = useCallback(async () => {
    const shareUrl = `${window.location.origin}?date=${encodeURIComponent(date)}&title=${encodeURIComponent(title)}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} — EverDate 纪念日倒计时`,
          text: `距离「${title}」还有... 快来一起倒计时吧！`,
          url: shareUrl,
        });
      } catch {
        await copyToClipboard(shareUrl);
      }
    } else {
      await copyToClipboard(shareUrl);
    }
  }, [title, date, copyToClipboard]);

  return (
    <button
      onClick={handleShare}
      className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full
        bg-gradient-to-r from-wine-red to-rose-gold
        text-white font-medium tracking-wide
        shadow-lg shadow-wine-red/20
        hover:shadow-xl hover:shadow-wine-red/30
        hover:scale-[1.02]
        active:scale-[0.98]
        transition-all duration-300 ease-out"
    >
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
        />
      </svg>
      <span>{copied ? "链接已复制 ✓" : "分享给 TA"}</span>
    </button>
  );
}
