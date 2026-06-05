import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Calendar, Sparkles, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { getCountdownParts, getAnniversaryTypeLabel, getAnniversaryTypeIcon, formatDate } from '@/utils'

export default function CountdownPage() {
  const { id } = useParams<{ id: string }>()
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  // Mock data for demo
  const anniversary = {
    id: id || 'demo',
    title: '我们的恋爱纪念日',
    date: '2026-08-15',
    type: 'dating',
    partnerName: '小红',
    description: '三年前的今天，我们第一次相遇...',
  }

  useEffect(() => {
    setMounted(true)
    const updateCountdown = () => {
      setCountdown(getCountdownParts(anniversary.date))
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [anniversary.date])

  const countdownUnits = [
    { value: countdown.days, label: '天' },
    { value: countdown.hours, label: '时' },
    { value: countdown.minutes, label: '分' },
    { value: countdown.seconds, label: '秒' },
  ]

  return (
    <div className="min-h-screen py-12 sm:py-20 gradient-warm">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Anniversary Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-4">{getAnniversaryTypeIcon(anniversary.type)}</div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-wine-800 mb-2">
              {anniversary.title}
            </h1>
            <p className="text-warm-600">
              {getAnniversaryTypeLabel(anniversary.type)} · {formatDate(anniversary.date)}
            </p>
            <p className="text-warm-500 mt-2">
              致 {anniversary.partnerName}
            </p>
          </motion.div>

          {/* Countdown Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card variant="elevated" className="mb-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-serif text-warm-700">距离纪念日还有</h2>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {countdownUnits.map((unit, index) => (
                  <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-center">
                      <div className="w-full aspect-square rounded-2xl gradient-wine text-white flex items-center justify-center mb-2">
                        <span className="text-4xl sm:text-5xl font-serif font-bold">
                          {mounted ? unit.value : '--'}
                        </span>
                      </div>
                      <span className="text-sm text-warm-600">{unit.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Description */}
          {anniversary.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="mb-8">
                <p className="text-warm-700 text-center italic">
                  "{anniversary.description}"
                </p>
              </Card>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <Link to={`/email/${anniversary.id}`}>
              <Button variant="secondary" className="w-full">
                <Sparkles className="w-5 h-5 mr-2" />
                生成祝福语
              </Button>
            </Link>
            <Link to={`/email/${anniversary.id}`}>
              <Button variant="secondary" className="w-full">
                <Mail className="w-5 h-5 mr-2" />
                预览邮件
              </Button>
            </Link>
            <Link to={`/payment/${anniversary.id}`}>
              <Button className="w-full">
                <Calendar className="w-5 h-5 mr-2" />
                立即支付
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
