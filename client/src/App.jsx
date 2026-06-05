import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';
import PaymentResult from './pages/PaymentResult';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50 font-sans">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-cream-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-serif font-bold text-lg">E</span>
                  </div>
                  <span className="font-serif text-xl font-semibold text-primary-800">EverDate</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                  首页
                </Link>
                <Link to="/payment" className="text-gray-600 hover:text-primary-600 transition-colors">
                  开通服务
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/payment/result" element={<PaymentResult />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-cream-200 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-500 text-sm">
              © 2026 EverDate. 为每一个值得纪念的日子，创造专属的浪漫。
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-serif font-bold text-primary-800 mb-4">
        EverDate 纪念日惊喜助手
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        智能纪念日倒计时与惊喜邮件服务，为情侣和夫妻提供高端浪漫的纪念日准备服务
      </p>
      <div className="space-y-4">
        <Link
          to="/payment"
          className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
        >
          立即开通服务 ¥9.9
        </Link>
      </div>
    </div>
  );
}

export default App;