import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard, ArrowLeft, Check, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const paymentMethods = [
  { id: "wechat", label: "微信支付", icon: "💚" },
  { id: "alipay", label: "支付宝", icon: "💙" },
];

export default function PaymentPage() {
  const { id } = useParams<{ id: string }>();
  const [selectedMethod, setSelectedMethod] = useState("wechat");
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Simulate payment
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setPaid(true);
    } finally {
      setLoading(false);
    }
  };

  if (paid) {
    return (
      <div className="gradient-warm min-h-screen py-12 sm:py-20">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <Check className="h-10 w-10 text-green-600" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-wine-800 mb-4 font-serif text-3xl font-bold">支付成功！</h1>
              <p className="text-warm-600 mb-8">
                您的纪念日惊喜邮件已成功安排，将在纪念日当天准时送达。
              </p>

              <Card variant="elevated" className="mb-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-warm-600">订单状态</span>
                    <span className="flex items-center font-medium text-green-600">
                      <Check className="mr-1 h-4 w-4" />
                      已支付
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-warm-600">支付金额</span>
                    <span className="text-wine-800 font-medium">¥9.9</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-warm-600">邮件发送</span>
                    <span className="text-warm-800 flex items-center font-medium">
                      <Clock className="mr-1 h-4 w-4" />
                      纪念日当天自动发送
                    </span>
                  </div>
                </div>
              </Card>

              <Link to="/">
                <Button variant="secondary" className="w-full">
                  返回首页
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          {/* Header */}
          <div className="mb-8">
            <Link
              to={`/email/${id}`}
              className="text-warm-600 hover:text-wine-700 inline-flex items-center transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回邮件编辑
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <div className="gradient-wine mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white">
                <CreditCard className="h-8 w-8" />
              </div>
              <h1 className="text-wine-800 mb-2 font-serif text-2xl font-bold sm:text-3xl">
                确认支付
              </h1>
              <p className="text-warm-600">支付后邮件将在纪念日当天自动发送</p>
            </div>

            {/* Order Summary */}
            <Card variant="elevated" className="mb-6">
              <h3 className="text-warm-800 mb-4 font-medium">订单详情</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-warm-600">EverDate 惊喜邮件服务</span>
                  <span className="text-wine-800">¥9.9</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-warm-600">包含功能</span>
                  <span className="text-warm-500 text-sm">倒计时+祝福+邮件</span>
                </div>
              </div>
              <div className="border-warm-100 mt-4 flex items-center justify-between border-t pt-4">
                <span className="text-warm-800 font-medium">合计</span>
                <span className="text-wine-800 font-serif text-2xl font-bold">¥9.9</span>
              </div>
            </Card>

            {/* Payment Methods */}
            <Card className="mb-6">
              <h3 className="text-warm-800 mb-4 font-medium">选择支付方式</h3>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`flex w-full items-center rounded-xl border-2 p-4 transition-all ${
                      selectedMethod === method.id
                        ? "border-wine-700 bg-wine-50"
                        : "border-warm-200 hover:border-warm-300"
                    }`}
                  >
                    <span className="mr-3 text-2xl">{method.icon}</span>
                    <span className="text-warm-800 font-medium">{method.label}</span>
                    <div className="ml-auto">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                          selectedMethod === method.id ? "border-wine-700" : "border-warm-300"
                        }`}
                      >
                        {selectedMethod === method.id && (
                          <div className="bg-wine-700 h-3 w-3 rounded-full" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Pay Button */}
            <Button size="lg" className="w-full" onClick={handlePayment} loading={loading}>
              <CreditCard className="mr-2 h-5 w-5" />
              确认支付 ¥9.9
            </Button>

            {/* Security Info */}
            <div className="text-warm-500 mt-6 flex items-center justify-center text-sm">
              <Shield className="mr-2 h-4 w-4" />
              <span>安全支付，由第三方支付平台保障</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
