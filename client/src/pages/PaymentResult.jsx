import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowLeft, Home } from 'lucide-react';

export default function PaymentResult() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const orderNo = searchParams.get('orderNo');

  const isSuccess = status === 'success';

  return (
    <div className="max-w-md mx-auto text-center py-16">
      {isSuccess ? (
        <>
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-serif font-bold text-primary-800 mb-4">支付成功！</h1>
          <p className="text-gray-600 mb-2">感谢您开通 EverDate 服务</p>
          {orderNo && (
            <p className="text-sm text-gray-500 mb-8">订单号: {orderNo}</p>
          )}
          
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-lg font-semibold text-primary-800 mb-4">接下来您可以</h2>
            <ul className="space-y-3 text-left">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                创建您的第一个纪念日
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                设置提醒和待办事项
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                预览惊喜邮件效果
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
          <h1 className="text-3xl font-serif font-bold text-primary-800 mb-4">支付失败</h1>
          <p className="text-gray-600 mb-2">支付过程中出现问题</p>
          {orderNo && (
            <p className="text-sm text-gray-500 mb-8">订单号: {orderNo}</p>
          )}
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-yellow-800">
              请检查网络连接后重试，或联系客服获取帮助
            </p>
          </div>
        </>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          返回首页
        </Link>
        
        {!isSuccess && (
          <Link
            to="/payment"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            重新支付
          </Link>
        )}
      </div>
    </div>
  );
}