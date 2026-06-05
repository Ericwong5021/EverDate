import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Card } from "@/components/ui/Card";
import { getAnniversaryTypeLabel } from "@/utils";

const anniversaryTypes = [
  { value: "wedding", label: "结婚纪念日" },
  { value: "dating", label: "恋爱纪念日" },
  { value: "birthday", label: "生日" },
  { value: "engagement", label: "订婚纪念日" },
  { value: "first-meet", label: "初次见面纪念日" },
  { value: "other", label: "其他纪念日" },
];

export default function CreateAnniversary() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    date: "",
    type: "dating",
    partnerName: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.title.trim()) {
      newErrors.title = "请输入纪念日名称";
    }
    if (!form.date) {
      newErrors.date = "请选择纪念日期";
    }
    if (!form.partnerName.trim()) {
      newErrors.partnerName = "请输入伴侣姓名";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo, generate a random ID
      const mockId = Math.random().toString(36).substring(2, 15);

      // Navigate to countdown page
      navigate(`/countdown/${mockId}`);
    } catch (error) {
      console.error("Failed to create anniversary:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10 text-center">
              <div className="gradient-wine mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white">
                <Heart className="h-8 w-8" />
              </div>
              <h1 className="text-wine-800 mb-3 font-serif text-3xl font-bold sm:text-4xl">
                创建纪念日
              </h1>
              <p className="text-warm-600">填写纪念日信息，开启惊喜之旅</p>
            </div>

            <Card variant="elevated">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="纪念日名称"
                  name="title"
                  placeholder="例如：我们的结婚纪念日"
                  value={form.title}
                  onChange={handleChange}
                  error={errors.title}
                />

                <Input
                  label="纪念日期"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  error={errors.date}
                />

                <Select
                  label="纪念日类型"
                  name="type"
                  options={anniversaryTypes}
                  value={form.type}
                  onChange={handleChange}
                />

                <Input
                  label="伴侣姓名"
                  name="partnerName"
                  placeholder="例如：小红"
                  value={form.partnerName}
                  onChange={handleChange}
                  error={errors.partnerName}
                />

                <Input
                  label="纪念日描述（选填）"
                  name="description"
                  placeholder="记录你们的故事..."
                  value={form.description}
                  onChange={handleChange}
                />

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full" loading={loading}>
                    <Calendar className="mr-2 h-5 w-5" />
                    创建纪念日
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </Card>

            <p className="text-warm-500 mt-6 text-center text-sm">
              创建后你可以自定义倒计时页面、生成AI祝福语、预览并发送惊喜邮件
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
