import type { BlessingStyle } from "../types/blessing";

const sampleBlessings: Record<BlessingStyle, string> = {
  romantic:
    "时光匆匆，但与你在一起的每一刻，都值得被永远铭记。你是我生命中最温柔的意外，也是我最坚定的选择。愿我们的爱情，如这封信一样，温暖而长久。",
  warm: "我知道说「我爱你」很容易，但我想用余生来证明这三个字的分量。谢谢你选择了我，让我成为世界上最幸运的人。今后的每一天，我都会更加珍惜你。",
  humorous:
    "据说在一起久了会变成亲人，但我们不一样——我们是一对依然会为对方心动的「老」情侣。谢谢你忍受我的小脾气，也谢谢你总是记得我爱吃什么。",
  literary:
    "你是我写过最美的诗，是我谱过最动人的曲。在所有星辰大海里，我只想停泊在你的港湾。今夜月色真美，而你更美。",
  minimal: "没有什么华丽的话想对你说。只想告诉你：有你在身边，每一天都是好日子。谢谢你，我爱你。",
};

export async function generateBlessing(_story: string, style: BlessingStyle): Promise<string> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real implementation, this would call an AI API
  // For now, return a sample blessing based on the style
  return sampleBlessings[style];
}
