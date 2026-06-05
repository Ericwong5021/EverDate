import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Calendar, Mail, Sparkles, Clock, Gift } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const features = [
  {
    icon: Calendar,
    title: '智能倒计时',
    description: '自动生成纪念日倒计时页面，实时提醒每一个重要时刻',
  },
  {
    icon: Sparkles,
    title: 'AI 祝福语',
    description: '基于你们的故事，生成独一无二的专属祝福文案',
  },
  {
    icon: Mail,
    title: '惊喜邮件',
    description: '自定义照片和祝福，当天自动向对方发送惊喜邮件',
  },
  {
    icon: Clock,
    title: '提前提醒',
    description: '关键时间点自动提醒，帮你提前准备惊喜',
  },
  {
    icon: Gift,
    title: '待办清单',
    description: '专属待办事项，礼物、餐厅、贺卡一目了然',
  },
  {
    icon: Heart,
    title: '高端体验',
    description: '浪漫优雅的视觉设计，让仪式感无处不在',
  },
]

const testimonials = [
  {
    name: '小明',
    role: '已婚用户',
    content: '用了 EverDate 再也没有忘记结婚纪念日，妻子收到邮件时感动得哭了。',
  },
  {
    name: '小红',
    role: '恋爱中',
    content: 'AI 生成的祝福语太贴心了，比我自己写的还好！',
  },
]

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-wine-800 mb-6">
                让爱意，<span className="text-gradient">准时抵达</span>
              </h1>
              <p className="text-lg sm:text-xl text-warm-600 mb-8 max-w-2xl mx-auto">
                EverDate 智能纪念日助手，帮你记住每一个重要时刻，
                提前规划惊喜，准时向最爱的人送上祝福。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/create">
                <Button size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  立即创建纪念日
                </Button>
              </Link>
              <Button variant="secondary" size="lg">
                了解更多
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-sm text-warm-500"
            >
              ¥9.9 / 次 · 包含完整倒计时、祝福生成、邮件投递
            </motion.p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-wine-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-wine-800 mb-4">
              为爱而生的功能
            </h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              每一个功能都围绕「让纪念日更有仪式感」而设计
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-wine-50 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-wine-700" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-wine-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-warm-600">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 gradient-warm">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-wine-800 mb-4">
              三步开启惊喜
            </h2>
            <p className="text-warm-600 max-w-2xl mx-auto">
              简单几步，为TA准备一份难忘的纪念日惊喜
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '创建纪念日', desc: '输入日期、选择类型、填写伴侣信息' },
              { step: '02', title: '定制祝福', desc: 'AI 生成专属祝福语，上传照片，预览邮件' },
              { step: '03', title: '准时送达', desc: '支付后系统自动在纪念日当天发送惊喜邮件' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full gradient-wine text-white text-2xl font-serif font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-serif font-semibold text-wine-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-warm-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-wine-800 mb-4">
              用户的心声
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className="h-full">
                  <p className="text-warm-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-wine-100 flex items-center justify-center">
                      <span className="text-wine-700 font-medium">{testimonial.name[0]}</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-wine-800">{testimonial.name}</p>
                      <p className="text-sm text-warm-500">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-wine text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              别让爱等待
            </h2>
            <p className="text-warm-200 mb-8 max-w-2xl mx-auto">
              现在就为TA准备下一次纪念日惊喜，让爱意准时抵达。
            </p>
            <Link to="/create">
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
                <Heart className="w-5 h-5 mr-2" />
                立即开始
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
