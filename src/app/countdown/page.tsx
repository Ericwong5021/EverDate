"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export default function CountdownPage() {
  // Demo: 127 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 127);
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <main>
      <Navbar />

      <section className="flex min-h-screen items-center pb-16 pt-24">
        <div className="container">
          <div className="mx-auto max-w-lg">
            <div className="mb-8 text-center">
              <Badge variant="gold" className="mb-4">
                倒计时
              </Badge>
              <h1 className="mb-3 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
                每一天，都离惊喜更近一步
              </h1>
            </div>

            {/* Countdown card */}
            <div className="relative mb-8">
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-[var(--color-gold-200)] to-[var(--color-gold-100)] opacity-40 blur-sm" />

              <Card variant="elevated" className="relative p-8 text-center">
                <p className="mb-4 text-sm font-[var(--font-ui)] text-[var(--color-muted-foreground)]">
                  距离结婚纪念日还有
                </p>

                <div className="mb-6 flex justify-center gap-6">
                  {[
                    { value: days, label: "天" },
                    { value: hours, label: "时" },
                    { value: minutes, label: "分" },
                    { value: seconds, label: "秒" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-[16px] bg-[var(--color-muted)] sm:h-20 sm:w-20">
                        <span className="text-3xl font-[var(--font-title)] font-light text-[var(--color-primary)] sm:text-4xl">
                          {String(item.value).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-xs font-[var(--font-ui)] text-[var(--color-cream-500)]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="section-divider" />

                <div className="flex items-center justify-between text-sm font-[var(--font-ui)]">
                  <span className="text-[var(--color-cream-600)]">
                    日期：{targetDate.toLocaleDateString("zh-CN")}
                  </span>
                  <span className="text-[var(--color-secondary)]">To My Love ♡</span>
                </div>
              </Card>
            </div>

            <div className="space-y-3 text-center">
              <Button size="lg" className="w-full">
                分享给 TA
              </Button>
              <Button size="lg" variant="secondary" className="w-full">
                返回首页
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
