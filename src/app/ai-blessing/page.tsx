"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/ui/Badge";

const styles = [
  { id: "romantic", label: "温柔浪漫", desc: "如月光般柔和的文字" },
  { id: "deep", label: "认真深情", desc: "字字句句都是真心" },
  { id: "humorous", label: "轻松幽默", desc: "用微笑传递爱意" },
  { id: "literary", label: "文艺诗意", desc: "像一首写给你的情诗" },
  { id: "simple", label: "简洁真诚", desc: "最简单的话，最深的爱" },
];

const sampleBlessings: Record<string, string> = {
  romantic:
    "时光匆匆，但与你在一起的每一刻，都值得被永远铭记。你是我生命中最温柔的意外，也是我最坚定的选择。愿我们的爱情，如这封信一样，温暖而长久。",
  deep:
    "我知道说「我爱你」很容易，但我想用余生来证明这三个字的分量。谢谢你选择了我，让我成为世界上最幸运的人。今后的每一天，我都会更加珍惜你。",
  humorous:
    "据说在一起久了会变成亲人，但我们不一样——我们是一对依然会为对方心动的「老」情侣。谢谢你忍受我的小脾气，也谢谢你总是记得我爱吃什么。",
  literary:
    "你是我写过最美的诗，是我谱过最动人的曲。在所有星辰大海里，我只想停泊在你的港湾。今夜月色真美，而你更美。",
  simple:
    "没有什么华丽的话想对你说。只想告诉你：有你在身边，每一天都是好日子。谢谢你，我爱你。",
};

export default function AIBlessingPage() {
  const [selectedStyle, setSelectedStyle] = useState("romantic");
  const [story, setStory] = useState("");
  const [generated, setGenerated] = useState(false);

  return (
    <main>
      <Navbar />

      <section className="pt-24 pb-16 min-h-screen">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-4">AI 祝福语</Badge>
            <h1 className="font-[var(--font-title)] text-3xl sm:text-4xl font-semibold text-[var(--color-primary)] mb-3">
              为你们的故事，写一封
              <br />
              只属于彼此的信。
            </h1>
            <p className="text-[var(--color-cream-600)] font-[var(--font-body)]">
              告诉我们你们的故事，AI 会为你生成一封专属祝福信
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Input */}
            <div className="space-y-6">
              <Card variant="default" className="p-6">
                <h3 className="font-[var(--font-title)] text-lg font-medium text-[var(--color-primary)] mb-4">
                  选择风格
                </h3>
                <div className="space-y-2">
                  {styles.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedStyle(s.id)}
                      className={`w-full text-left px-4 py-3 rounded-[var(--radius-lg)] border transition-all duration-300 ${
                        selectedStyle === s.id
                          ? "border-[var(--color-secondary)] bg-[var(--color-gold-50)] shadow-[var(--shadow-gold)]"
                          : "border-[var(--color-border)] hover:border-[var(--color-border-hover)]"
                      }`}
                    >
                      <span className="text-sm font-medium text-[var(--color-primary)] font-[var(--font-ui)]">
                        {s.label}
                      </span>
                      <span className="block text-xs text-[var(--color-cream-500)] font-[var(--font-ui)] mt-0.5">
                        {s.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </Card>

              <Textarea
                label="你们的故事（可选）"
                placeholder="告诉我们你们是怎么认识的、有什么特别的回忆……"
                rows={5}
                value={story}
                onChange={(e) => setStory(e.target.value)}
              />

              <Button
                size="lg"
                className="w-full"
                onClick={() => setGenerated(true)}
              >
                生成祝福语
              </Button>
            </div>

            {/* Right: Preview */}
            <div>
              <Card variant="elevated" className="p-6 sticky top-24">
                <div className="text-center mb-4">
                  <span className="text-2xl text-[var(--color-secondary)]">❋</span>
                </div>

                {generated ? (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-[var(--color-cream-700)] font-[var(--font-body)] leading-relaxed text-sm sm:text-base italic">
                      &ldquo;{sampleBlessings[selectedStyle]}&rdquo;
                    </p>
                    <div className="text-center pt-4 border-t border-[var(--color-border)]">
                      <span className="text-xs text-[var(--color-cream-500)] font-[var(--font-ui)]">
                        风格：{styles.find((s) => s.id === selectedStyle)?.label}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="flex-1">
                        重新生成
                      </Button>
                      <Button size="sm" className="flex-1">
                        使用此祝福
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-[var(--color-cream-400)]">
                    <p className="text-sm font-[var(--font-ui)]">
                      选择风格并点击&ldquo;生成祝福语&rdquo;
                      <br />
                      AI 将为你创作一封专属祝福信
                    </p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
