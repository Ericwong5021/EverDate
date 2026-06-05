"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function PaymentPage() {
  const features = [
    "纪念日倒计时",
    "提前提醒",
    "专属待办事项",
    "图片上传",
    "AI 祝福生成",
    "定时惊喜邮件发送",
  ];

  return (
    <main>
      <Navbar />

      <section className="flex min-h-screen items-center pb-16 pt-24">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge variant="gold" className="mb-4">
              价格
            </Badge>
            <h1 className="mb-3 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
              一次完整的纪念日惊喜服务
            </h1>
            <p className="font-[var(--font-body)] text-[var(--color-cream-600)]">
              少一点工具感，多一点仪式感
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-[var(--color-gold-200)] to-[var(--color-gold-100)] opacity-40 blur-sm" />

              <Card variant="elevated" className="relative w-full max-w-md p-8 text-center">
                <p className="mb-2 text-sm font-[var(--font-ui)] text-[var(--color-muted-foreground)]">
                  EverDate 纪念日惊喜
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-[var(--font-title)] font-semibold text-[var(--color-primary)]">
                    ¥9.9
                  </span>
                  <span className="ml-1 font-[var(--font-body)] text-[var(--color-cream-600)]">
                    / 次
                  </span>
                </div>

                <p className="mb-6 text-sm font-[var(--font-body)] text-[var(--color-cream-600)]">
                  一个完整的纪念日惊喜，从准备到送达
                </p>

                <div className="section-divider" />

                <ul className="mb-8 space-y-3 text-left">
                  {features.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-gold-100)] text-xs text-[var(--color-secondary)]">
                        ✓
                      </span>
                      <span className="text-sm font-[var(--font-body)] text-[var(--color-cream-700)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button size="lg" className="mb-4 w-full">
                  准备这次惊喜
                </Button>

                <p className="text-xs font-[var(--font-ui)] text-[var(--color-cream-500)]">
                  支持微信支付 · 支付宝 · 银行卡
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
