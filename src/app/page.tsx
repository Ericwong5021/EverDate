"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

/* ================================================================
   EverDate — Landing Page
   Sections: Hero → Features → Countdown → Todo → Email → AI → Pricing → FAQ → Footer
   ================================================================ */

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div
        className="noise-overlay absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(232,199,200,0.45), transparent 50%), radial-gradient(circle at 70% 80%, rgba(201,164,106,0.15), transparent 50%), linear-gradient(135deg, #FFF8F1 0%, #F4E8DA 100%)",
        }}
      />

      {/* Decorative floating elements */}
      <div className="animate-float absolute top-20 right-[15%] h-3 w-3 rounded-full bg-[var(--color-gold-300)] opacity-40" />
      <div
        className="animate-float absolute bottom-32 left-[10%] h-2 w-2 rounded-full bg-[var(--color-wine-300)] opacity-30"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="animate-float absolute top-40 left-[20%] h-1.5 w-1.5 rounded-full bg-[var(--color-gold-200)] opacity-50"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div className="stagger">
            <Badge variant="gold" className="mb-6">
              ✦ 浪漫纪念日惊喜服务
            </Badge>

            <h1 className="mb-6 text-4xl leading-tight font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
              让重要的日子，
              <br />
              准时开出一场
              <span className="text-[var(--color-secondary)]"> 惊喜</span>。
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed font-[var(--font-body)] text-[var(--color-cream-700)]">
              设置纪念日倒计时、提前准备提醒、专属待办清单，并在当天为对方送达一封带着照片与祝福的惊喜邮件。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/create">
                <Button size="lg">开始准备惊喜</Button>
              </Link>
              <Button size="lg" variant="secondary">
                看看它如何工作
              </Button>
            </div>
          </div>

          {/* Right: Countdown card preview */}
          <div
            className="animate-fade-in-up flex justify-center lg:justify-end"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Gold border glow */}
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-[var(--color-gold-200)] to-[var(--color-gold-100)] opacity-50 blur-sm" />

              <div className="relative w-[320px] rounded-[24px] border border-[var(--color-border-hover)] bg-[var(--color-cream-50)]/90 p-8 shadow-[var(--shadow-elevated)] backdrop-blur-md">
                <p className="mb-2 text-center text-sm font-[var(--font-ui)] text-[var(--color-muted-foreground)]">
                  距离结婚纪念日还有
                </p>
                <div className="mb-4 text-center">
                  <span className="text-7xl leading-none font-[var(--font-title)] font-light text-[var(--color-primary)]">
                    27
                  </span>
                  <p className="mt-1 text-sm font-[var(--font-ui)] text-[var(--color-muted-foreground)]">
                    天
                  </p>
                </div>
                <div className="section-divider" style={{ margin: "16px 0" }} />
                <div className="flex items-center justify-between text-sm font-[var(--font-ui)]">
                  <span className="text-[var(--color-cream-600)]">日期：2026.10.21</span>
                  <span className="text-[var(--color-secondary)]">To My Love ♡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────────────
function Features() {
  const features = [
    {
      icon: "♡",
      title: "纪念日倒计时",
      desc: "像一封高级邀请函，让每一天都值得期待。",
    },
    {
      icon: "✦",
      title: "提前提醒",
      desc: "提前准备，不让惊喜迟到。",
    },
    {
      icon: "◇",
      title: "专属待办清单",
      desc: "一份优雅的准备清单，帮你把心意落地。",
    },
    {
      icon: "✧",
      title: "惊喜邮件",
      desc: "带着照片与祝福，替你送达爱意。",
    },
    {
      icon: "❋",
      title: "AI 祝福语",
      desc: "为你们的故事，写一封只属于彼此的信。",
    },
    {
      icon: "◈",
      title: "定时发送",
      desc: "你只需要设置一次，剩下的交给我们。",
    },
  ];

  return (
    <section className="bg-[var(--color-cream-50)] py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
            把纪念日变成值得期待的一天
          </h2>
          <div className="gold-line mx-auto mb-4" />
          <p className="mx-auto max-w-md font-[var(--font-body)] text-[var(--color-cream-600)]">
            从倒计时到惊喜送达，我们帮你完成每一个浪漫细节
          </p>
        </div>

        <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.title}
              variant="glass"
              className="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="mb-4 text-3xl text-[var(--color-secondary)]">{f.icon}</div>
              <h3 className="mb-2 text-lg font-[var(--font-title)] font-medium text-[var(--color-primary)]">
                {f.title}
              </h3>
              <p className="text-sm font-[var(--font-body)] text-[var(--color-cream-600)]">
                {f.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Countdown Module ──────────────────────────────────────────
function CountdownModule() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="wine" className="mb-4">
              倒计时
            </Badge>
            <h2 className="mb-4 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
              每一天，都离惊喜更近一步
            </h2>
            <p className="mb-6 leading-relaxed font-[var(--font-body)] text-[var(--color-cream-600)]">
              像一封高级邀请函般的倒计时卡片，让等待也变得浪漫。数字在静静跳动，提醒你：重要的日子，正在靠近。
            </p>
            <ul className="space-y-3">
              {["实时倒计时，精确到秒", "优雅的邀请函风格卡片", "支持分享给对方"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-[var(--font-ui)] text-[var(--color-cream-700)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <Card variant="elevated" className="w-full max-w-sm p-8 text-center">
              <p className="mb-3 text-sm font-[var(--font-ui)] text-[var(--color-muted-foreground)]">
                距离结婚纪念日还有
              </p>
              <div className="mb-4 flex justify-center gap-4">
                {[
                  { num: "127", label: "天" },
                  { num: "08", label: "时" },
                  { num: "42", label: "分" },
                  { num: "15", label: "秒" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <span className="block text-3xl font-[var(--font-title)] font-light text-[var(--color-primary)]">
                      {item.num}
                    </span>
                    <span className="text-xs font-[var(--font-ui)] text-[var(--color-cream-500)]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="section-divider" style={{ margin: "16px 0" }} />
              <p className="text-sm font-[var(--font-ui)] text-[var(--color-cream-600)]">
                2026.10.21 · To My Love
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Todo Module ───────────────────────────────────────────────
function TodoModule() {
  const todos = [
    { done: true, text: "预订晚餐" },
    { done: true, text: "准备照片" },
    { done: false, text: "写下你们的故事" },
    { done: false, text: "确认邮件发送时间" },
    { done: false, text: "选择祝福语风格" },
  ];

  return (
    <section className="bg-[var(--color-muted)] py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 flex justify-center lg:order-1">
            <Card variant="default" className="w-full max-w-sm p-6">
              <h3 className="mb-4 text-lg font-[var(--font-title)] font-medium text-[var(--color-primary)]">
                纪念日准备清单
              </h3>
              <div className="space-y-3">
                {todos.map((todo) => (
                  <div
                    key={todo.text}
                    className="flex items-center gap-3 border-b border-[var(--color-border)] py-2 last:border-0"
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border text-xs ${
                        todo.done
                          ? "border-[var(--color-secondary)] bg-[var(--color-secondary)] text-white"
                          : "border-[var(--color-border-hover)]"
                      }`}
                    >
                      {todo.done && "✓"}
                    </span>
                    <span
                      className={`text-sm font-[var(--font-body)] ${
                        todo.done
                          ? "text-[var(--color-cream-500)] line-through"
                          : "text-[var(--color-foreground)]"
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <Badge variant="gold" className="mb-4">
              待办清单
            </Badge>
            <h2 className="mb-4 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
              像一张优雅的准备清单
            </h2>
            <p className="mb-6 leading-relaxed font-[var(--font-body)] text-[var(--color-cream-600)]">
              不是普通的 To-do
              App，而是一份精致的仪式准备指南。每一项完成，都让你离完美惊喜更近一步。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Email Preview ─────────────────────────────────────────────
function EmailPreview() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <Badge variant="wine" className="mb-4">
            惊喜邮件
          </Badge>
          <h2 className="mb-4 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
            一封打开的信
          </h2>
          <p className="mx-auto max-w-md font-[var(--font-body)] text-[var(--color-cream-600)]">
            精心设计的邮件模板，像一封带着温度的手写信
          </p>
        </div>

        <div className="flex justify-center">
          <Card variant="elevated" className="w-full max-w-lg overflow-hidden p-0">
            {/* Letter header */}
            <div
              className="relative h-40"
              style={{
                background: "linear-gradient(135deg, var(--color-wine-100), var(--color-gold-100))",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl opacity-30">♡</span>
              </div>
            </div>

            <div className="p-8">
              {/* Gold border accent */}
              <div className="mb-6 rounded-[16px] border border-[var(--color-gold-200)] p-6">
                <h3 className="mb-3 text-center text-xl font-[var(--font-title)] text-[var(--color-primary)]">
                  写给最重要的人
                </h3>
                <p className="text-center text-sm leading-relaxed font-[var(--font-body)] text-[var(--color-cream-600)]">
                  亲爱的，今天是我们在一起的第 1278 天。
                  <br />
                  每一天都因为有你而变得不同。
                  <br />
                  感谢你出现在我的生命里。
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-[var(--font-ui)] text-[var(--color-cream-500)]">
                <span>From: 你的爱人</span>
                <span>发送时间: 2026.10.21 09:00</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ── AI Blessing ───────────────────────────────────────────────
function AIBlessing() {
  const styles = ["温柔浪漫", "认真深情", "轻松幽默", "文艺诗意", "简洁真诚"];

  return (
    <section className="bg-[var(--color-muted)] py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="gold" className="mb-4">
              AI 祝福语
            </Badge>
            <h2 className="mb-4 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
              为你们的故事，写一封
              <br />
              只属于彼此的信。
            </h2>
            <p className="mb-6 leading-relaxed font-[var(--font-body)] text-[var(--color-cream-600)]">
              告诉我们你们的故事，AI 会为你生成一封专属祝福信。不是冰冷的模板，而是带着温度的文字。
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {styles.map((s) => (
                <Badge key={s} variant="default">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Card variant="glass" className="w-full max-w-sm">
              <div className="mb-4 text-center">
                <span className="text-2xl text-[var(--color-secondary)]">❋</span>
              </div>
              <p className="text-center text-sm leading-relaxed font-[var(--font-body)] text-[var(--color-cream-700)] italic">
                &ldquo;时光匆匆，但与你在一起的每一刻，都值得被永远铭记。你是我生命中最温柔的意外，也是我最坚定的选择。&rdquo;
              </p>
              <div className="mt-4 text-center">
                <span className="text-xs font-[var(--font-ui)] text-[var(--color-cream-500)]">
                  — 风格：温柔浪漫
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pricing ───────────────────────────────────────────────────
function Pricing() {
  const items = [
    "纪念日倒计时",
    "提前提醒",
    "专属待办事项",
    "图片上传",
    "AI 祝福生成",
    "定时惊喜邮件发送",
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
            一次完整的纪念日惊喜服务
          </h2>
          <div className="gold-line mx-auto" />
        </div>

        <div className="flex justify-center">
          <div className="relative">
            {/* Gold border glow */}
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

              <div className="section-divider" style={{ margin: "24px 0" }} />

              <ul className="mb-8 space-y-3 text-left">
                {items.map((item) => (
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

              <Button size="lg" className="w-full">
                准备这次惊喜
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────
function FAQ() {
  const faqs = [
    {
      q: "如何创建一个纪念日惊喜？",
      a: "只需填写纪念日日期、对方昵称和邮箱，选择祝福语风格，上传一张照片，设置发送时间即可。整个过程不超过 3 分钟。",
    },
    {
      q: "对方会收到什么？",
      a: "一封精心设计的惊喜邮件，包含你们的照片、专属祝福语和你的签名。邮件风格与网站一致，精致而有温度。",
    },
    {
      q: "祝福语是 AI 生成的吗？",
      a: "是的，AI 会根据你提供的故事和选择的风格，为你生成一封专属祝福信。你也可以在生成后进行修改。",
    },
    {
      q: "可以提前多久设置？",
      a: "你可以提前任意时间设置。系统会在你指定的时间准时发送惊喜邮件，不会提前也不会延迟。",
    },
  ];

  return (
    <section className="bg-[var(--color-muted)] py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
            常见问题
          </h2>
          <div className="gold-line mx-auto" />
        </div>

        <div className="stagger mx-auto max-w-2xl space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.q} variant="glass" className="p-6">
              <h3 className="mb-2 text-lg font-[var(--font-title)] font-medium text-[var(--color-primary)]">
                {faq.q}
              </h3>
              <p className="text-sm leading-relaxed font-[var(--font-body)] text-[var(--color-cream-600)]">
                {faq.a}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(232,199,200,0.3), transparent 60%), linear-gradient(135deg, #FFF8F1, #F4E8DA)",
        }}
      />
      <div className="relative z-10 container text-center">
        <h2 className="mb-4 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
          你只需要设置一次
          <br />
          剩下的交给我们
        </h2>
        <p className="mx-auto mb-8 max-w-md font-[var(--font-body)] text-[var(--color-cream-600)]">
          把纪念日变成值得期待的一天。让爱意准时抵达。
        </p>
        <Link href="/create">
          <Button size="lg">开始准备惊喜</Button>
        </Link>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <CountdownModule />
      <TodoModule />
      <EmailPreview />
      <AIBlessing />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
