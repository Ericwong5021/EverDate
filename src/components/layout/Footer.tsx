import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[var(--color-cream-900)] py-16 text-[var(--color-cream-200)]">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-[var(--font-title)] font-semibold text-[var(--color-cream-50)]">
              EverDate
            </h3>
            <p className="max-w-sm text-sm font-[var(--font-body)] leading-relaxed text-[var(--color-cream-400)]">
              让爱意准时抵达。一个帮你认真准备爱的仪式的服务。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-[var(--font-ui)] font-medium uppercase tracking-wider text-[var(--color-cream-100)]">
              产品
            </h4>
            <ul className="space-y-2">
              {["创建纪念日", "AI 祝福语", "惊喜邮件", "价格"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm font-[var(--font-ui)] text-[var(--color-cream-400)] no-underline transition-colors hover:text-[var(--color-gold-400)]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-[var(--font-ui)] font-medium uppercase tracking-wider text-[var(--color-cream-100)]">
              支持
            </h4>
            <ul className="space-y-2">
              {["常见问题", "联系我们", "隐私政策", "服务条款"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm font-[var(--font-ui)] text-[var(--color-cream-400)] no-underline transition-colors hover:text-[var(--color-gold-400)]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="section-divider mb-8 mt-12"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(201,164,106,0.2) 20%, rgba(201,164,106,0.4) 50%, rgba(201,164,106,0.2) 80%, transparent 100%)",
          }}
        />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs font-[var(--font-ui)] text-[var(--color-cream-500)]">
            © 2026 EverDate. 用心纪念每一个重要时刻。
          </p>
          <p className="text-xs font-[var(--font-ui)] text-[var(--color-cream-600)]">
            少一点工具感，多一点仪式感。
          </p>
        </div>
      </div>
    </footer>
  );
}
