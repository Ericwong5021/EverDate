"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";

const blessingStyles = [
  { value: "romantic", label: "温柔浪漫" },
  { value: "deep", label: "认真深情" },
  { value: "humorous", label: "轻松幽默" },
  { value: "literary", label: "文艺诗意" },
  { value: "simple", label: "简洁真诚" },
];

export default function CreatePage() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    nickname: "",
    email: "",
    sendTime: "",
    style: "romantic",
    story: "",
  });
  const [photo, setPhoto] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main>
      <Navbar />

      <section className="min-h-screen pb-16 pt-24">
        <div className="container max-w-2xl">
          <div className="mb-12 text-center">
            <Badge variant="gold" className="mb-4">
              创建纪念日
            </Badge>
            <h1 className="mb-3 text-3xl font-[var(--font-title)] font-semibold text-[var(--color-primary)] sm:text-4xl">
              准备你的惊喜
            </h1>
            <p className="font-[var(--font-body)] text-[var(--color-cream-600)]">
              填写以下信息，我们会帮你打造一份专属的纪念日惊喜
            </p>
          </div>

          <Card variant="default" className="p-8">
            <form className="space-y-6">
              <Input
                label="纪念日名称"
                placeholder="例：结婚纪念日"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />

              <Input
                label="纪念日日期"
                type="date"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  label="对方昵称"
                  placeholder="例：宝贝"
                  value={form.nickname}
                  onChange={(e) => handleChange("nickname", e.target.value)}
                />
                <Input
                  label="对方邮箱"
                  type="email"
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              <Input
                label="发送时间"
                type="datetime-local"
                value={form.sendTime}
                onChange={(e) => handleChange("sendTime", e.target.value)}
              />

              <Select
                label="祝福语风格"
                options={blessingStyles}
                value={form.style}
                onChange={(e) => handleChange("style", e.target.value)}
              />

              <div>
                <label className="mb-2 block text-sm font-[var(--font-ui)] font-medium text-[var(--color-primary)]">
                  上传照片
                </label>
                <div
                  className="cursor-pointer rounded-[var(--radius-xl)] border-2 border-dashed border-[var(--color-border)] p-8 text-center transition-colors hover:border-[var(--color-secondary)]"
                  onClick={() => {
                    // In real app, open file picker
                    setPhoto("/placeholder-photo.jpg");
                  }}
                >
                  {photo ? (
                    <p className="text-sm font-[var(--font-ui)] text-[var(--color-secondary)]">
                      ✓ 照片已选择
                    </p>
                  ) : (
                    <>
                      <div className="mb-2 text-3xl text-[var(--color-cream-400)]">📷</div>
                      <p className="text-sm font-[var(--font-ui)] text-[var(--color-cream-500)]">
                        点击上传一张特别的照片
                      </p>
                    </>
                  )}
                </div>
              </div>

              <Textarea
                label="补充你们的故事（可选）"
                placeholder="告诉我们你们的故事，AI 会为你们生成一封专属祝福信……"
                rows={4}
                value={form.story}
                onChange={(e) => handleChange("story", e.target.value)}
              />

              <div className="pt-4">
                <Button size="lg" className="w-full">
                  生成我的惊喜
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
