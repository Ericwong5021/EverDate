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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6">
      {/* Background gradient */}
      <div className="from-cream via-cream-warm to-rose-gold-pale/30 fixed inset-0 bg-gradient-to-br" />

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
      <div className="from-rose-gold-pale/20 fixed top-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br to-transparent blur-3xl" />
      <div className="from-wine-red/5 fixed bottom-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr to-transparent blur-3xl" />

      {/* Main card */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="glass-card shadow-rose-gold/10 animate-fade-in-up rounded-3xl p-6 shadow-2xl sm:p-10">
          {/* Top ornament */}
          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="to-rose-gold-light h-px w-12 bg-gradient-to-r from-transparent" />
              <span className="text-rose-gold text-lg">✦</span>
              <div className="to-rose-gold-light h-px w-12 bg-gradient-to-l from-transparent" />
            </div>
          </div>

          {/* Anniversary type badge */}
          <div className="mb-4 flex justify-center">
            <span className="bg-rose-gold-pale/50 text-wine-red border-rose-gold-pale inline-block rounded-full border px-4 py-1 text-xs font-medium tracking-widest uppercase">
              {type}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-2 text-center">
            <span className="text-rose-gold block text-lg font-medium tracking-wide sm:text-xl">
              {partnerA} & {partnerB}
            </span>
            <span className="text-gradient mt-2 block text-2xl font-semibold sm:text-3xl">
              {title}
            </span>
          </h1>

          {/* Date display */}
          {isValidDate && (
            <div className="mt-4 mb-8 flex justify-center">
              <span className="text-rose-gold/70 text-sm tracking-wider sm:text-base">
                {targetDate.getFullYear()}年{targetDate.getMonth() + 1}月{targetDate.getDate()}日
              </span>
            </div>
          )}

          {/* Countdown */}
          <div className="mb-8">
            {isValidDate ? (
              <CountdownTimer targetDate={targetDate} />
            ) : (
              <div className="text-rose-gold py-8 text-center">
                <p className="text-lg">请设置正确的纪念日日期</p>
                <p className="text-rose-gold-light mt-2 text-sm">
                  在链接中添加 ?date=2025-02-14&title=我们的纪念日
                </p>
              </div>
            )}
          </div>

          {/* Bottom ornament */}
          <div className="mb-6 flex justify-center">
            <div className="via-rose-gold-light h-px w-32 bg-gradient-to-r from-transparent to-transparent" />
          </div>

          {/* Message */}
          <p className="text-rose-gold/80 mb-6 text-center text-sm leading-relaxed italic sm:text-base">
            &ldquo;每一天的等待，都是因为遇见你，值得。&rdquo;
          </p>

          {/* Share button */}
          <div className="flex justify-center">
            <ShareButton title={title} date={dateStr} />
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-center">
            <span className="text-rose-gold-light/60 text-xs tracking-widest uppercase">
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
        <div className="bg-cream flex min-h-screen items-center justify-center">
          <div className="glass-card shadow-rose-gold/10 rounded-3xl p-10 text-center shadow-2xl">
            <div className="animate-pulse-gentle text-rose-gold mb-4 text-4xl">♥</div>
            <p className="text-rose-gold-light">加载中...</p>
          </div>
        </div>
      }
    >
      <CountdownPage />
    </Suspense>
  );
}
