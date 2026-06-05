"use client";

import { useState, useEffect } from "react";

function Hero() {
  return (
    <section className="from-wine-800 via-wine-700 to-wine-600 relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-b">
      <div className="absolute inset-0 opacity-10">
        <div className="bg-rosegold-400 absolute top-20 left-10 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-rosegold-300 absolute right-10 bottom-20 h-80 w-80 rounded-full blur-3xl" />
        <div className="bg-cream-200 absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-rosegold-300 mb-6 font-[family-name:var(--font-inter)] text-sm tracking-[0.3em] uppercase">
          EverDate
        </p>
        <h1 className="text-cream-100 mb-6 font-[family-name:var(--font-noto-serif-sc)] text-5xl leading-tight font-bold md:text-7xl lg:text-8xl">
          让每一个纪念日
          <br />
          <span className="from-rosegold-300 to-rosegold-400 bg-gradient-to-r bg-clip-text text-transparent">
            都被记住
          </span>
        </h1>
        <p className="text-wine-200 mx-auto mb-10 max-w-2xl font-[family-name:var(--font-noto-serif-sc)] text-lg leading-relaxed md:text-xl">
          智能纪念日管理，倒计时提醒、AI 祝福语生成、邮件投递——让爱与纪念永不褪色
        </p>
        <a
          href="#pricing"
          className="from-rosegold-500 to-rosegold-400 hover:from-rosegold-600 hover:to-rosegold-500 shadow-rosegold-500/30 hover:shadow-rosegold-500/50 inline-block rounded-full bg-gradient-to-r px-10 py-4 font-[family-name:var(--font-noto-serif-sc)] text-lg font-semibold text-white shadow-lg transition-all duration-300"
        >
          立即创建纪念日
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="text-rosegold-300 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

const features = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>
    ),
    title: "智能倒计时",
    description: "自动计算距纪念日的天数、小时、分钟，实时倒计时让你不错过任何重要时刻。",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    title: "贴心提醒",
    description: "提前多日推送提醒通知，自定义提醒时间，再也不会忘记重要的纪念日。",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "AI 祝福语",
    description: "输入你的心意，AI 为你生成独一无二的浪漫祝福语，让每一句话都充满温度。",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "邮件投递",
    description: "设定日期自动发送祝福邮件给TA，即使不在身边，爱也能准时抵达。",
  },
];

function Features() {
  return (
    <section className="bg-cream-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-rosegold-500 mb-3 font-[family-name:var(--font-inter)] text-sm tracking-[0.2em] uppercase">
            Features
          </p>
          <h2 className="text-wine-800 mb-4 font-[family-name:var(--font-noto-serif-sc)] text-3xl font-bold md:text-4xl">
            用心守护每一份纪念
          </h2>
          <p className="text-wine-600/70 mx-auto max-w-xl font-[family-name:var(--font-noto-serif-sc)]">
            从倒计时到祝福投递，EverDate 用科技温暖每一个值得铭记的瞬间
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group border-rosegold-100 hover:border-rosegold-300 hover:shadow-rosegold-200/40 rounded-2xl border bg-white p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="bg-wine-50 text-wine-600 group-hover:bg-wine-600 mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-wine-800 mb-3 font-[family-name:var(--font-noto-serif-sc)] text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-wine-600/70 font-[family-name:var(--font-noto-serif-sc)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="from-cream-100 to-cream-50 bg-gradient-to-b px-6 py-24">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-rosegold-500 mb-3 font-[family-name:var(--font-inter)] text-sm tracking-[0.2em] uppercase">
          Pricing
        </p>
        <h2 className="text-wine-800 mb-4 font-[family-name:var(--font-noto-serif-sc)] text-3xl font-bold md:text-4xl">
          简单透明的定价
        </h2>
        <p className="text-wine-600/70 mb-12 font-[family-name:var(--font-noto-serif-sc)]">
          一次付费，永久使用
        </p>

        <div className="border-wine-200 shadow-wine-100/50 relative rounded-3xl border-2 bg-white p-8 shadow-xl">
          <div className="bg-wine-600 text-cream-100 absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-[family-name:var(--font-inter)] text-xs tracking-wider">
            推荐
          </div>
          <h3 className="text-wine-600 mb-2 font-[family-name:var(--font-noto-serif-sc)] text-lg">
            EverDate 纪念日服务
          </h3>
          <div className="mb-6 flex items-baseline justify-center gap-1">
            <span className="text-wine-500 text-lg">¥</span>
            <span className="text-wine-800 font-[family-name:var(--font-playfair)] text-6xl font-bold">
              9.9
            </span>
          </div>
          <ul className="text-wine-600 mb-8 space-y-3 text-left">
            {[
              "无限纪念日创建与管理",
              "智能倒计时与提醒推送",
              "AI 祝福语生成",
              "邮件投递服务",
              "永久使用，无后续费用",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 font-[family-name:var(--font-noto-serif-sc)]"
              >
                <svg
                  className="text-wine-500 h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-wine-700 text-cream-100 hover:bg-wine-800 shadow-wine-300/40 w-full rounded-full py-4 font-[family-name:var(--font-noto-serif-sc)] text-lg font-semibold shadow-lg transition-colors duration-300">
            立即创建纪念日
          </button>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-wine-800 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-cream-100 mb-6 font-[family-name:var(--font-noto-serif-sc)] text-3xl font-bold md:text-4xl">
          不要让爱在等待中褪色
        </h2>
        <p className="text-wine-200 mx-auto mb-10 max-w-xl font-[family-name:var(--font-noto-serif-sc)] text-lg">
          每一个纪念日都值得被用心对待。加入 EverDate，让重要的人和事永远被记住。
        </p>
        <a
          href="#pricing"
          className="from-rosegold-400 to-rosegold-300 text-wine-800 hover:from-rosegold-300 hover:to-rosegold-200 shadow-rosegold-500/30 inline-block rounded-full bg-gradient-to-r px-10 py-4 font-[family-name:var(--font-noto-serif-sc)] text-lg font-bold shadow-lg transition-all duration-300"
        >
          立即开始
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-wine-900 text-wine-300 px-6 py-12">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-cream-200 mb-2 font-[family-name:var(--font-playfair)] text-2xl font-semibold tracking-wide">
          EverDate
        </p>
        <p className="text-wine-400 font-[family-name:var(--font-noto-serif-sc)] text-sm">
          让每一个纪念日都被记住
        </p>
        <div className="border-wine-700/50 mt-8 border-t pt-8">
          <p className="text-wine-500 font-[family-name:var(--font-inter)] text-xs">
            &copy; {new Date().getFullYear()} EverDate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-wine-800/95 shadow-wine-900/30 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <span className="text-cream-100 font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-wide">
          EverDate
        </span>
        <a
          href="#pricing"
          className="text-cream-200 border-rosegold-400/50 hover:bg-rosegold-400/20 rounded-full border px-6 py-2 font-[family-name:var(--font-inter)] text-sm transition-colors"
        >
          立即体验
        </a>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-noto-serif-sc)]">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
