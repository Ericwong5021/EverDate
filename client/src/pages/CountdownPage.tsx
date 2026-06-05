import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Calendar, Sparkles, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  getCountdownParts,
  getAnniversaryTypeLabel,
  getAnniversaryTypeIcon,
  formatDate,
} from "@/utils";

export default function CountdownPage() {
  const { id } = useParams<{ id: string }>();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  // Mock data for demo
  const anniversary = {
    id: id || "demo",
    title: "我们的恋爱纪念日",
    date: "2026-08-15",
    type: "dating",
    partnerName: "小红",
    description: "三年前的今天，我们第一次相遇...",
  };

  useEffect(() => {
    setMounted(true);
    const updateCountdown = () => {
      setCountdown(getCountdownParts(anniversary.date));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [anniversary.date]);

  const countdownUnits = [
    { value: countdown.days, label: "天" },
    { value: countdown.hours, label: "时" },
    { value: countdown.minutes, label: "分" },
    { value: countdown.seconds, label: "秒" },
  ];

  return (
    <div className="gradient-warm min-h-screen py-12 sm:py-20">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Anniversary Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 text-6xl">{getAnniversaryTypeIcon(anniversary.type)}</div>
            <h1 className="text-wine-800 mb-2 font-serif text-3xl font-bold sm:text-4xl">
              {anniversary.title}
            </h1>
            <p className="text-warm-600">
              {getAnniversaryTypeLabel(anniversary.type)} · {formatDate(anniversary.date)}
            </p>
            <p className="text-warm-500 mt-2">致 {anniversary.partnerName}</p>
          </motion.div>

          {/* Countdown Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card variant="elevated" className="mb-8">
              <div className="mb-6 text-center">
                <h2 className="text-warm-700 font-serif text-xl">距离纪念日还有</h2>
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
                      <div className="gradient-wine mb-2 flex aspect-square w-full items-center justify-center rounded-2xl text-white">
                        <span className="font-serif text-4xl font-bold sm:text-5xl">
                          {mounted ? unit.value : "--"}
                        </span>
                      </div>
                      <span className="text-warm-600 text-sm">{unit.label}</span>
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
                <p className="text-warm-700 text-center italic">"{anniversary.description}"</p>
              </Card>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <Link to={`/email/${anniversary.id}`}>
              <Button variant="secondary" className="w-full">
                <Sparkles className="mr-2 h-5 w-5" />
                生成祝福语
              </Button>
            </Link>
            <Link to={`/email/${anniversary.id}`}>
              <Button variant="secondary" className="w-full">
                <Mail className="mr-2 h-5 w-5" />
                预览邮件
              </Button>
            </Link>
            <Link to={`/payment/${anniversary.id}`}>
              <Button className="w-full">
                <Calendar className="mr-2 h-5 w-5" />
                立即支付
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
