import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-cream-50/80 border-warm-100 sticky top-0 z-50 border-b backdrop-blur-md">
        <nav className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="text-wine-700 h-6 w-6" fill="currentColor" />
              <span className="text-wine-800 font-serif text-xl font-semibold">EverDate</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/create" className="btn-ghost text-sm">
                创建纪念日
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-wine-800 py-12 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <Heart className="h-5 w-5" fill="currentColor" />
                <span className="font-serif text-lg font-semibold">EverDate</span>
              </div>
              <p className="text-warm-200 text-sm">
                智能纪念日倒计时与惊喜邮件服务，让每一个重要时刻都不被遗忘。
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">产品</h4>
              <ul className="text-warm-200 space-y-2 text-sm">
                <li>
                  <Link to="/create" className="transition-colors hover:text-white">
                    创建纪念日
                  </Link>
                </li>
                <li>
                  <Link to="/" className="transition-colors hover:text-white">
                    了解更多
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">支持</h4>
              <ul className="text-warm-200 space-y-2 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    常见问题
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    联系我们
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-wine-700 text-warm-200 mt-8 border-t pt-8 text-center text-sm">
            <p>© 2026 EverDate. 用心守护每一个重要时刻。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
