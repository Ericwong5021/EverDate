import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-cream-50/80 backdrop-blur-md border-b border-warm-100">
        <nav className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-wine-700" fill="currentColor" />
              <span className="text-xl font-serif font-semibold text-wine-800">EverDate</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/create" className="btn-ghost text-sm">
                创建纪念日
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-wine-800 text-white py-12">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5" fill="currentColor" />
                <span className="text-lg font-serif font-semibold">EverDate</span>
              </div>
              <p className="text-warm-200 text-sm">
                智能纪念日倒计时与惊喜邮件服务，让每一个重要时刻都不被遗忘。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-warm-200 text-sm">
                <li><Link to="/create" className="hover:text-white transition-colors">创建纪念日</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">了解更多</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">支持</h4>
              <ul className="space-y-2 text-warm-200 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">常见问题</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-wine-700 mt-8 pt-8 text-center text-warm-200 text-sm">
            <p>© 2026 EverDate. 用心守护每一个重要时刻。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
