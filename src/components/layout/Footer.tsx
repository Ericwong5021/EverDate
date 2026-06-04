import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-cream-900)] text-[var(--color-cream-200)] py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-[var(--font-title)] text-2xl font-semibold text-[var(--color-cream-50)] mb-4">
              EverDate
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-cream-400)] max-w-sm font-[var(--font-body)]">
              让爱意准时抵达。一个帮你认真准备爱的仪式的服务。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[var(--font-ui)] text-sm font-medium text-[var(--color-cream-100)] mb-4 uppercase tracking-wider">
              产品
            </h4>
            <ul className="space-y-2">
              {["创建纪念日", "AI 祝福语", "惊喜邮件", "价格"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[var(--color-cream-400)] hover:text-[var(--color-gold-400)] transition-colors no-underline font-[var(--font-ui)]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-ui)] text-sm font-medium text-[var(--color-cream-100)] mb-4 uppercase tracking-wider">
              支持
            </h4>
            <ul className="space-y-2">
              {["常见问题", "联系我们", "隐私政策", "服务条款"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[var(--color-cream-400)] hover:text-[var(--color-gold-400)] transition-colors no-underline font-[var(--font-ui)]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12 mb-8" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(201,164,106,0.2) 20%, rgba(201,164,106,0.4) 50%, rgba(201,164,106,0.2) 80%, transparent 100%)" }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-cream-500)] font-[var(--font-ui)]">
            © 2026 EverDate. 用心纪念每一个重要时刻。
          </p>
          <p className="text-xs text-[var(--color-cream-600)] font-[var(--font-ui)]">
            少一点工具感，多一点仪式感。
          </p>
        </div>
      </div>
    </footer>
  );
}
