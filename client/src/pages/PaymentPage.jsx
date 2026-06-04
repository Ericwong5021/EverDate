import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, QrCode, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

const PAYMENT_METHODS = [
  {
    id: 'wechat_pay',
    name: '微信支付',
    icon: Smartphone,
    color: 'bg-green-500',
    description: '使用微信扫码支付'
  },
  {
    id: 'alipay',
    name: '支付宝',
    icon: CreditCard,
    color: 'bg-blue-500',
    description: '使用支付宝扫码支付'
  }
];

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [orderInfo, setOrderInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle, pending, success, failed
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!selectedMethod) {
      setError('请选择支付方式');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Mock user ID for demo
      const userId = 'user_' + Date.now();
      
      const response = await axios.post('/api/payment/create', {
        userId,
        paymentMethod: selectedMethod,
        metadata: {
          service: 'everdate_anniversary',
          plan: 'full_access'
        }
      });

      if (response.data.success) {
        setOrderInfo(response.data.data);
        setPaymentStatus('pending');
        
        // Start polling for payment status
        startPaymentPolling(response.data.data.orderNo);
      }
    } catch (err) {
      setError(err.response?.data?.error || '创建支付订单失败');
    } finally {
      setLoading(false);
    }
  };

  const startPaymentPolling = (orderNo) => {
    const pollInterval = setInterval(async () => {
      try {
        const response = await axios.get(`/api/payment/verify/${orderNo}`);
        if (response.data.data.paid) {
          setPaymentStatus('success');
          clearInterval(pollInterval);
          setTimeout(() => {
            navigate('/payment/result?status=success&orderNo=' + orderNo);
          }, 2000);
        }
      } catch (err) {
        console.error('Polling error:', err);
      }
    }, 3000);

    // Stop polling after 5 minutes
    setTimeout(() => {
      clearInterval(pollInterval);
      if (paymentStatus === 'pending') {
        setPaymentStatus('failed');
        navigate('/payment/result?status=failed&orderNo=' + orderNo);
      }
    }, 300000);
  };

  if (paymentStatus === 'success') {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-2">支付成功！</h2>
        <p className="text-gray-600">正在跳转到结果页面...</p>
      </div>
    );
  }

  if (paymentStatus === 'pending' && orderInfo) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <Loader2 className="w-16 h-16 text-primary-500 mx-auto mb-4 animate-spin" />
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-2">等待支付</h2>
        <p className="text-gray-600 mb-6">请使用{selectedMethod === 'wechat_pay' ? '微信' : '支付宝'}扫描下方二维码完成支付</p>
        
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <img 
            src={orderInfo.qrCode} 
            alt="支付二维码" 
            className="w-48 h-48 mx-auto mb-4"
          />
          <p className="text-sm text-gray-500">订单号: {orderInfo.orderNo}</p>
          <p className="text-lg font-semibold text-primary-600">¥{(orderInfo.amount / 100).toFixed(2)}</p>
        </div>

        <p className="text-sm text-gray-500">支付完成后将自动跳转</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-primary-800 mb-2">开通 EverDate 服务</h1>
        <p className="text-gray-600">一次性支付 ¥9.9，解锁全部纪念日惊喜功能</p>
      </div>

      {/* Service Features */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold text-primary-800 mb-4">服务包含</h2>
        <ul className="space-y-3">
          {[
            '智能纪念日倒计时页面',
            '提前提醒与待办事项清单',
            '惊喜邮件自动投递',
            'AI 生成专属祝福语',
            '个性化设置与照片上传'
          ].map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Payment Method Selection */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold text-primary-800 mb-4">选择支付方式</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PAYMENT_METHODS.map((method) => {
            const Icon = method.icon;
            return (
              <button
                key={method.id}
                onClick={() => {
                  setSelectedMethod(method.id);
                  setError(null);
                }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedMethod === method.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-800">{method.name}</p>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
          <XCircle className="w-5 h-5 text-red-500 mr-3" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Payment Button */}
      <div className="text-center">
        <button
          onClick={handlePayment}
          disabled={!selectedMethod || loading}
          className={`px-8 py-3 rounded-lg font-medium transition-colors ${
            !selectedMethod || loading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary-500 text-white hover:bg-primary-600'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              处理中...
            </span>
          ) : (
            `支付 ¥9.9`
          )}
        </button>
        <p className="text-sm text-gray-500 mt-4">
          支付即表示同意《服务协议》和《隐私政策》
        </p>
      </div>
    </div>
  );
}