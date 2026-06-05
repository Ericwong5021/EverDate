"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import ShareButton from "@/components/ShareButton";

const DECORATIVE_HEARTS = [
  { top: "8%", left: "10%", size: "text-xl", delay: "0s", opacity: "opacity-20" },
  { top: "15%", right: "8%", size: "text-2xl", delay: "0.5s", opacity: "opacity-15" },
  { top: "70%", left: "5%", size: "text-lg", delay: "1s", opacity: "opacity-10" },
  { top: "80%", right: "12%", size: "text-xl", delay: "1.5s", opacity: "opacity-15" },
  { top: "45%", left: "3%", size: "text-sm", delay: "2s", opacity: "opacity-10" },
];

function CountdownPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "我们的纪念日";
  const dateStr = searchParams.get("date") || "2025-02-14";
  const partnerA = searchParams.get("a") || "你";
  const partnerB = searchParams.get("b") || "我";
  const type = searchParams.get("type") || "纪念日";

  const targetDate = new Date(dateStr);
  const isValidDate = !isNaN(targetDate.getTime());

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-8 sm:px-6">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-cream via-cream-warm to-rose-gold-pale/30" />

      {/* Decorative floating elements */}
      {DECORATIVE_HEARTS.map((heart, i) => (
        <div
          key={i}
          className={`fixed ${heart.size} ${heart.opacity} text-rose-gold-light animate-float pointer-events-none select-none`}
          style={{
            top: heart.top,
            left: heart.left,
            right: heart.right,
            animationDelay: heart.delay,
          }}
        >
          ♥
        </div>
      ))}

      {/* Radial decorative circles */}
      <div className="fixed top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-rose-gold-pale/20 to-transparent blur-3xl" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-wine-red/5 to-transparent blur-3xl" />

      {/* Main card */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-2xl shadow-rose-gold/10 animate-fade-in-up">
          {/* Top ornament */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-gold-light" />
              <span className="text-rose-gold text-lg">✦</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-gold-light" />
            </div>
          </div>

          {/* Anniversary type badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-block px-4 py-1 rounded-full text-xs tracking-widest uppercase font-medium bg-rose-gold-pale/50 text-wine-red border border-rose-gold-pale">
              {type}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-center mb-2">
            <span className="block text-lg sm:text-xl text-rose-gold font-medium tracking-wide">
              {partnerA} & {partnerB}
            </span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gradient font-semibold">
              {title}
            </span>
          </h1>

          {/* Date display */}
          {isValidDate && (
            <div className="flex justify-center mt-4 mb-8">
              <span className="text-sm sm:text-base text-rose-gold/70 tracking-wider">
                {targetDate.getFullYear()}年{targetDate.getMonth() + 1}月{targetDate.getDate()}日
              </span>
            </div>
          )}

          {/* Countdown */}
          <div className="mb-8">
            {isValidDate ? (
              <CountdownTimer targetDate={targetDate} />
            ) : (
              <div className="text-center text-rose-gold py-8">
                <p className="text-lg">请设置正确的纪念日日期</p>
                <p className="text-sm mt-2 text-rose-gold-light">
                  在链接中添加 ?date=2025-02-14&title=我们的纪念日
                </p>
              </div>
            )}
          </div>

          {/* Bottom ornament */}
          <div className="flex justify-center mb-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-rose-gold-light to-transparent" />
          </div>

          {/* Message */}
          <p className="text-center text-sm sm:text-base text-rose-gold/80 leading-relaxed mb-6 italic">
            &ldquo;每一天的等待，都是因为遇见你，值得。&rdquo;
          </p>

          {/* Share button */}
          <div className="flex justify-center">
            <ShareButton title={title} date={dateStr} />
          </div>

          {/* Footer */}
          <div className="flex justify-center mt-8">
            <span className="text-xs text-rose-gold-light/60 tracking-widest uppercase">
              EverDate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-cream">
          <div className="glass-card rounded-3xl p-10 shadow-2xl shadow-rose-gold/10 text-center">
            <div className="animate-pulse-gentle text-rose-gold text-4xl mb-4">♥</div>
            <p className="text-rose-gold-light">加载中...</p>
          </div>
        </div>
      }
    >
      <CountdownPage />
    </Suspense>
  );
}
