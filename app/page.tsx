"use client";

import { useState, useEffect } from "react";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-wine-800 via-wine-700 to-wine-600">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-rosegold-400 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-rosegold-300 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cream-200 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-rosegold-300 text-sm tracking-[0.3em] uppercase mb-6 font-[family-name:var(--font-inter)]">
          EverDate
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream-100 mb-6 leading-tight font-[family-name:var(--font-noto-serif-sc)]">
          让每一个纪念日
          <br />
          <span className="bg-gradient-to-r from-rosegold-300 to-rosegold-400 bg-clip-text text-transparent">
            都被记住
          </span>
        </h1>
        <p className="text-lg md:text-xl text-wine-200 max-w-2xl mx-auto mb-10 leading-relaxed font-[family-name:var(--font-noto-serif-sc)]">
          智能纪念日管理，倒计时提醒、AI
          祝福语生成、邮件投递——让爱与纪念永不褪色
        </p>
        <a
          href="#pricing"
          className="inline-block px-10 py-4 bg-gradient-to-r from-rosegold-500 to-rosegold-400 text-white rounded-full text-lg font-semibold hover:from-rosegold-600 hover:to-rosegold-500 transition-all duration-300 shadow-lg shadow-rosegold-500/30 hover:shadow-rosegold-500/50 font-[family-name:var(--font-noto-serif-sc)]"
        >
          立即创建纪念日
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-rosegold-300"
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
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>
    ),
    title: "智能倒计时",
    description:
      "自动计算距纪念日的天数、小时、分钟，实时倒计时让你不错过任何重要时刻。",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    title: "贴心提醒",
    description:
      "提前多日推送提醒通知，自定义提醒时间，再也不会忘记重要的纪念日。",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "AI 祝福语",
    description:
      "输入你的心意，AI 为你生成独一无二的浪漫祝福语，让每一句话都充满温度。",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "邮件投递",
    description:
      "设定日期自动发送祝福邮件给TA，即使不在身边，爱也能准时抵达。",
  },
];

function Features() {
  return (
    <section className="py-24 px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-rosegold-500 text-sm tracking-[0.2em] uppercase mb-3 font-[family-name:var(--font-inter)]">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-wine-800 mb-4 font-[family-name:var(--font-noto-serif-sc)]">
            用心守护每一份纪念
          </h2>
          <p className="text-wine-600/70 max-w-xl mx-auto font-[family-name:var(--font-noto-serif-sc)]">
            从倒计时到祝福投递，EverDate
            用科技温暖每一个值得铭记的瞬间
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white border border-rosegold-100 hover:border-rosegold-300 transition-all duration-300 hover:shadow-xl hover:shadow-rosegold-200/40"
            >
              <div className="w-14 h-14 rounded-xl bg-wine-50 flex items-center justify-center text-wine-600 mb-5 group-hover:bg-wine-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-wine-800 mb-3 font-[family-name:var(--font-noto-serif-sc)]">
                {feature.title}
              </h3>
              <p className="text-wine-600/70 leading-relaxed font-[family-name:var(--font-noto-serif-sc)]">
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
    <section
      id="pricing"
      className="py-24 px-6 bg-gradient-to-b from-cream-100 to-cream-50"
    >
      <div className="max-w-lg mx-auto text-center">
        <p className="text-rosegold-500 text-sm tracking-[0.2em] uppercase mb-3 font-[family-name:var(--font-inter)]">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-wine-800 mb-4 font-[family-name:var(--font-noto-serif-sc)]">
          简单透明的定价
        </h2>
        <p className="text-wine-600/70 mb-12 font-[family-name:var(--font-noto-serif-sc)]">
          一次付费，永久使用
        </p>

        <div className="relative p-8 rounded-3xl bg-white border-2 border-wine-200 shadow-xl shadow-wine-100/50">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-wine-600 text-cream-100 text-xs rounded-full tracking-wider font-[family-name:var(--font-inter)]">
            推荐
          </div>
          <h3 className="text-lg text-wine-600 mb-2 font-[family-name:var(--font-noto-serif-sc)]">
            EverDate 纪念日服务
          </h3>
          <div className="flex items-baseline justify-center gap-1 mb-6">
            <span className="text-lg text-wine-500">¥</span>
            <span className="text-6xl font-bold text-wine-800 font-[family-name:var(--font-playfair)]">
              9.9
            </span>
          </div>
          <ul className="space-y-3 text-left text-wine-600 mb-8">
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
                  className="w-5 h-5 text-wine-500 shrink-0"
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
          <button className="w-full py-4 rounded-full bg-wine-700 text-cream-100 font-semibold text-lg hover:bg-wine-800 transition-colors duration-300 shadow-lg shadow-wine-300/40 font-[family-name:var(--font-noto-serif-sc)]">
            立即创建纪念日
          </button>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6 bg-wine-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cream-100 mb-6 font-[family-name:var(--font-noto-serif-sc)]">
          不要让爱在等待中褪色
        </h2>
        <p className="text-wine-200 text-lg mb-10 max-w-xl mx-auto font-[family-name:var(--font-noto-serif-sc)]">
          每一个纪念日都值得被用心对待。加入 EverDate，让重要的人和事永远被记住。
        </p>
        <a
          href="#pricing"
          className="inline-block px-10 py-4 bg-gradient-to-r from-rosegold-400 to-rosegold-300 text-wine-800 rounded-full text-lg font-bold hover:from-rosegold-300 hover:to-rosegold-200 transition-all duration-300 shadow-lg shadow-rosegold-500/30 font-[family-name:var(--font-noto-serif-sc)]"
        >
          立即开始
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-wine-900 text-wine-300">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-[family-name:var(--font-playfair)] text-2xl text-cream-200 mb-2 font-semibold tracking-wide">
          EverDate
        </p>
        <p className="text-sm text-wine-400 font-[family-name:var(--font-noto-serif-sc)]">
          让每一个纪念日都被记住
        </p>
        <div className="mt-8 pt-8 border-t border-wine-700/50">
          <p className="text-xs text-wine-500 font-[family-name:var(--font-inter)]">
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-wine-800/95 backdrop-blur-md shadow-lg shadow-wine-900/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="font-[family-name:var(--font-playfair)] text-xl text-cream-100 font-semibold tracking-wide">
          EverDate
        </span>
        <a
          href="#pricing"
          className="px-6 py-2 text-sm text-cream-200 border border-rosegold-400/50 rounded-full hover:bg-rosegold-400/20 transition-colors font-[family-name:var(--font-inter)]"
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
