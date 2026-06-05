import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Sparkles, Edit3, Image, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";

const greetingStyles = [
  { id: "romantic", label: "浪漫", icon: "💕" },
  { id: "warm", label: "温馨", icon: "🌻" },
  { id: "humorous", label: "幽默", icon: "😄" },
  { id: "literary", label: "文艺", icon: "📖" },
  { id: "simple", label: "简约", icon: "✨" },
];

export default function EmailPreview() {
  const { id } = useParams<{ id: string }>();

  const [selectedStyle, setSelectedStyle] = useState("romantic");
  const [customStory, setCustomStory] = useState("");
  const [generatedGreeting, setGeneratedGreeting] = useState(
    "亲爱的，三年前的今天，我们的故事开始了。每一分每一秒，都是我最珍贵的回忆。愿我们的爱情，如初见时般美好，如美酒般醇厚。爱你，今天，明天，永远。",
  );
  const [loading, setLoading] = useState(false);
  const [emailConfig, setEmailConfig] = useState({
    subject: "💕 一份来自三年前的礼物",
    recipientName: "小红",
    recipientEmail: "",
  });

  const handleGenerateGreeting = async () => {
    setLoading(true);
    try {
      // Simulate AI generation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const greetings: Record<string, string> = {
        romantic:
          "亲爱的，时光飞逝，三年的每一天都因为有你而闪闪发光。感谢你出现在我的生命里，让平凡的日子变成了最美的诗篇。爱你，永远。",
        warm: "亲爱的，在这个特别的日子里，想对你说声谢谢。谢谢你的陪伴，你的理解，你的温暖。愿我们的每一天都充满阳光和笑声。",
        humorous:
          "嘿，三年了！你还没被我烦跑，真是个奇迹。不过说真的，能和你一起犯傻的日子，是我最快乐的时光。继续一起闹腾吧！",
        literary:
          "岁月如歌，你是那最美的旋律。三年光阴，我们的故事在时光里慢慢沉淀，愈发醇厚。愿这份美好，永远延续。",
        simple: "三年了，谢谢你。爱你。",
      };

      setGeneratedGreeting(greetings[selectedStyle] || greetings.romantic);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to={`/countdown/${id}`}
            className="text-warm-600 hover:text-wine-700 inline-flex items-center transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回倒计时
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-wine-800 mb-6 font-serif text-2xl font-bold sm:text-3xl">
              定制惊喜邮件
            </h1>

            {/* Greeting Style Selection */}
            <Card className="mb-6">
              <h3 className="text-warm-800 mb-4 flex items-center font-medium">
                <Sparkles className="text-wine-600 mr-2 h-5 w-5" />
                选择祝福风格
              </h3>
              <div className="flex flex-wrap gap-2">
                {greetingStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      selectedStyle === style.id
                        ? "bg-wine-700 text-white"
                        : "bg-warm-100 text-warm-700 hover:bg-warm-200"
                    }`}
                  >
                    <span className="mr-1">{style.icon}</span>
                    {style.label}
                  </button>
                ))}
              </div>
            </Card>

            {/* Story Input */}
            <Card className="mb-6">
              <h3 className="text-warm-800 mb-4 flex items-center font-medium">
                <Edit3 className="text-wine-600 mr-2 h-5 w-5" />
                你们的故事（选填）
              </h3>
              <textarea
                value={customStory}
                onChange={(e) => setCustomStory(e.target.value)}
                placeholder="分享你们的故事，让 AI 生成更个性化的祝福语..."
                className="border-warm-200 text-warm-900 placeholder-warm-400 focus:ring-wine-500 h-32 w-full resize-none rounded-xl border bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:outline-none"
              />
              <Button
                onClick={handleGenerateGreeting}
                loading={loading}
                variant="secondary"
                className="mt-4"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                生成祝福语
              </Button>
            </Card>

            {/* Generated Greeting */}
            <Card className="mb-6">
              <h3 className="text-warm-800 mb-4 flex items-center font-medium">
                <Mail className="text-wine-600 mr-2 h-5 w-5" />
                祝福语内容
              </h3>
              <textarea
                value={generatedGreeting}
                onChange={(e) => setGeneratedGreeting(e.target.value)}
                className="border-warm-200 text-warm-900 focus:ring-wine-500 h-40 w-full resize-none rounded-xl border bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:outline-none"
              />
            </Card>

            {/* Email Config */}
            <Card className="mb-6">
              <h3 className="text-warm-800 mb-4 flex items-center font-medium">
                <Image className="text-wine-600 mr-2 h-5 w-5" />
                邮件设置
              </h3>
              <div className="space-y-4">
                <Input
                  label="邮件主题"
                  value={emailConfig.subject}
                  onChange={(e) => setEmailConfig({ ...emailConfig, subject: e.target.value })}
                />
                <Input
                  label="收件人姓名"
                  value={emailConfig.recipientName}
                  onChange={(e) =>
                    setEmailConfig({ ...emailConfig, recipientName: e.target.value })
                  }
                />
                <Input
                  label="收件人邮箱"
                  type="email"
                  value={emailConfig.recipientEmail}
                  onChange={(e) =>
                    setEmailConfig({ ...emailConfig, recipientEmail: e.target.value })
                  }
                  placeholder="partner@example.com"
                />
              </div>
            </Card>

            <Link to={`/payment/${id}`}>
              <Button size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                继续：支付并发送
              </Button>
            </Link>
          </motion.div>

          {/* Right: Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-24">
              <h2 className="text-wine-800 mb-4 font-serif text-xl font-semibold">邮件预览</h2>

              <Card variant="elevated" className="overflow-hidden">
                {/* Email Header */}
                <div className="gradient-wine -m-8 mb-6 rounded-t-2xl p-6 text-white">
                  <div className="mb-4 flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm opacity-80">来自</p>
                      <p className="font-medium">EverDate 纪念日助手</p>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg">{emailConfig.subject}</h3>
                </div>

                {/* Email Body */}
                <div className="space-y-6">
                  <div>
                    <p className="text-warm-600 mb-4">
                      亲爱的 {emailConfig.recipientName || "TA"}，
                    </p>
                    <p className="text-warm-800 leading-relaxed whitespace-pre-line">
                      {generatedGreeting}
                    </p>
                  </div>

                  {/* Photo Placeholder */}
                  <div className="bg-warm-100 flex aspect-video items-center justify-center rounded-xl">
                    <div className="text-warm-400 text-center">
                      <Image className="mx-auto mb-2 h-12 w-12" />
                      <p className="text-sm">照片将显示在这里</p>
                    </div>
                  </div>

                  <div className="border-warm-100 border-t pt-4 text-center">
                    <p className="text-warm-500 text-sm">由 EverDate 智能纪念日助手发送</p>
                    <p className="text-warm-400 mt-1 text-xs">让爱意，准时抵达 ❤️</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
