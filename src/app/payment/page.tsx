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

      <section className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-4">价格</Badge>
            <h1 className="font-[var(--font-title)] text-3xl sm:text-4xl font-semibold text-[var(--color-primary)] mb-3">
              一次完整的纪念日惊喜服务
            </h1>
            <p className="text-[var(--color-cream-600)] font-[var(--font-body)]">
              少一点工具感，多一点仪式感
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-[var(--color-gold-200)] to-[var(--color-gold-100)] opacity-40 blur-sm" />

              <Card variant="elevated" className="relative w-full max-w-md text-center p-8">
                <p className="text-sm text-[var(--color-muted-foreground)] font-[var(--font-ui)] mb-2">
                  EverDate 纪念日惊喜
                </p>
                <div className="mb-6">
                  <span className="font-[var(--font-title)] text-5xl font-semibold text-[var(--color-primary)]">
                    ¥9.9
                  </span>
                  <span className="text-[var(--color-cream-600)] font-[var(--font-body)] ml-1">/ 次</span>
                </div>

                <p className="text-sm text-[var(--color-cream-600)] font-[var(--font-body)] mb-6">
                  一个完整的纪念日惊喜，从准备到送达
                </p>

                <div className="section-divider" />

                <ul className="space-y-3 mb-8 text-left">
                  {features.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-gold-100)] flex items-center justify-center text-[var(--color-secondary)] text-xs flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-sm font-[var(--font-body)] text-[var(--color-cream-700)]">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button size="lg" className="w-full mb-4">
                  准备这次惊喜
                </Button>

                <p className="text-xs text-[var(--color-cream-500)] font-[var(--font-ui)]">
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
