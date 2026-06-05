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

      <section className="min-h-screen pt-24 pb-16">
        <div className="container max-w-3xl">
          <div className="mb-12 text-center">
            <Badge variant="wine" className="mb-4">
              惊喜邮件
            </Badge>
            <h1 className="mb-3 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
              预览你的惊喜邮件
            </h1>
            <p className="font-[var(--font-body)] text-[var(--color-cream-600)]">
              这是对方将会收到的邮件效果
            </p>
          </div>

          {/* Email preview */}
          <Card variant="elevated" className="mb-8 overflow-hidden p-0">
            {/* Email header bar */}
            <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-cream-100)] px-6 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-wine-100)] text-sm font-[var(--font-ui)] text-[var(--color-wine-800)]">
                  E
                </div>
                <div>
                  <p className="text-sm font-[var(--font-ui)] font-medium text-[var(--color-primary)]">
                    EverDate
                  </p>
                  <p className="text-xs font-[var(--font-ui)] text-[var(--color-cream-500)]">
                    to: yourlove@email.com
                  </p>
                </div>
              </div>
              <span className="text-xs font-[var(--font-ui)] text-[var(--color-cream-500)]">
                2026.10.21
              </span>
            </div>

            {/* Email body - letter style */}
            <div className="p-8 sm:p-12">
              {/* Photo area */}
              <div
                className="relative mb-8 h-48 w-full overflow-hidden rounded-[16px]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-wine-100), var(--color-gold-100), var(--color-cream-200))",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-30">♡</span>
                </div>
                <div className="absolute right-3 bottom-3">
                  <span className="rounded-full bg-[var(--color-cream-50)]/80 px-2 py-1 text-xs font-[var(--font-ui)] text-[var(--color-cream-600)]">
                    📷 我们的合照
                  </span>
                </div>
              </div>

              {/* Gold bordered letter */}
              <div className="relative mb-8 rounded-[16px] border border-[var(--color-gold-200)] p-6 sm:p-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-cream-50)] px-4">
                  <span className="text-xs font-[var(--font-ui)] text-[var(--color-secondary)]">
                    ✦ 一封给你的信 ✦
                  </span>
                </div>

                <h2 className="mt-2 mb-6 text-center text-2xl font-[var(--font-title)] text-[var(--color-primary)]">
                  写给最重要的人
                </h2>

                <div className="space-y-4 text-sm leading-relaxed font-[var(--font-body)] text-[var(--color-cream-700)] sm:text-base">
                  <p>亲爱的，</p>
                  <p>
                    今天是我们在一起的第 1278 天。从第一次见面到现在，每一天都因为有你而变得不同。
                  </p>
                  <p>你是我生命中最温柔的存在，是我每天醒来的理由，也是我每晚入睡前最后的牵挂。</p>
                  <p>感谢你出现在我的生命里，感谢你让平凡的日子变得闪闪发光。</p>
                  <p>我爱你，不止今天，而是每一个明天。</p>
                </div>

                <div className="mt-8 text-right">
                  <p className="text-lg font-[var(--font-title)] text-[var(--color-primary)] italic">
                    永远爱你的人
                  </p>
                  <p className="mt-1 text-xs font-[var(--font-ui)] text-[var(--color-cream-500)]">
                    2026.10.21
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center text-xs font-[var(--font-ui)] text-[var(--color-cream-500)]">
                <p>由 EverDate 为你送达 ♡</p>
                <p className="mt-1">让爱意准时抵达</p>
              </div>
            </div>
          </Card>

          <div className="flex justify-center gap-4">
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
