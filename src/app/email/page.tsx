"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function EmailPreviewPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-24 pb-16 min-h-screen">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <Badge variant="wine" className="mb-4">惊喜邮件</Badge>
            <h1 className="font-[var(--font-title)] text-3xl sm:text-4xl font-semibold text-[var(--color-primary)] mb-3">
              预览你的惊喜邮件
            </h1>
            <p className="text-[var(--color-cream-600)] font-[var(--font-body)]">
              这是对方将会收到的邮件效果
            </p>
          </div>

          {/* Email preview */}
          <Card variant="elevated" className="p-0 overflow-hidden mb-8">
            {/* Email header bar */}
            <div className="bg-[var(--color-cream-100)] px-6 py-3 border-b border-[var(--color-border)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-wine-100)] flex items-center justify-center text-[var(--color-wine-800)] text-sm font-[var(--font-ui)]">
                  E
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-primary)] font-[var(--font-ui)]">EverDate</p>
                  <p className="text-xs text-[var(--color-cream-500)] font-[var(--font-ui)]">to: yourlove@email.com</p>
                </div>
              </div>
              <span className="text-xs text-[var(--color-cream-500)] font-[var(--font-ui)]">2026.10.21</span>
            </div>

            {/* Email body - letter style */}
            <div className="p-8 sm:p-12">
              {/* Photo area */}
              <div
                className="w-full h-48 rounded-[16px] mb-8 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, var(--color-wine-100), var(--color-gold-100), var(--color-cream-200))",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-30">♡</span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="text-xs bg-[var(--color-cream-50)]/80 px-2 py-1 rounded-full font-[var(--font-ui)] text-[var(--color-cream-600)]">
                    📷 我们的合照
                  </span>
                </div>
              </div>

              {/* Gold bordered letter */}
              <div className="border border-[var(--color-gold-200)] rounded-[16px] p-6 sm:p-8 mb-8 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-cream-50)] px-4">
                  <span className="text-xs text-[var(--color-secondary)] font-[var(--font-ui)]">✦ 一封给你的信 ✦</span>
                </div>

                <h2 className="font-[var(--font-title)] text-2xl text-[var(--color-primary)] text-center mb-6 mt-2">
                  写给最重要的人
                </h2>

                <div className="space-y-4 text-[var(--color-cream-700)] font-[var(--font-body)] leading-relaxed text-sm sm:text-base">
                  <p>亲爱的，</p>
                  <p>
                    今天是我们在一起的第 1278 天。从第一次见面到现在，每一天都因为有你而变得不同。
                  </p>
                  <p>
                    你是我生命中最温柔的存在，是我每天醒来的理由，也是我每晚入睡前最后的牵挂。
                  </p>
                  <p>
                    感谢你出现在我的生命里，感谢你让平凡的日子变得闪闪发光。
                  </p>
                  <p>
                    我爱你，不止今天，而是每一个明天。
                  </p>
                </div>

                <div className="mt-8 text-right">
                  <p className="font-[var(--font-title)] text-lg text-[var(--color-primary)] italic">
                    永远爱你的人
                  </p>
                  <p className="text-xs text-[var(--color-cream-500)] font-[var(--font-ui)] mt-1">
                    2026.10.21
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center text-xs text-[var(--color-cream-500)] font-[var(--font-ui)]">
                <p>由 EverDate 为你送达 ♡</p>
                <p className="mt-1">让爱意准时抵达</p>
              </div>
            </div>
          </Card>

          <div className="flex gap-4 justify-center">
            <Button size="lg">确认发送</Button>
            <Button size="lg" variant="secondary">
              编辑邮件
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
