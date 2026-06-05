import { Router } from 'express'

const router = Router()

const greetings: Record<string, Record<string, string>> = {
  romantic: {
    default: '亲爱的，时光飞逝，但每一天因为有你而闪闪发光。感谢你出现在我的生命里，让平凡的日子变成了最美的诗篇。爱你，永远。',
    withStory: (story: string) =>
      `亲爱的，${story}每一分每一秒，都是我最珍贵的回忆。愿我们的爱情，如初见时般美好，如美酒般醇厚。爱你，今天，明天，永远。`,
  },
  warm: {
    default: '亲爱的，在这个特别的日子里，想对你说声谢谢。谢谢你的陪伴，你的理解，你的温暖。愿我们的每一天都充满阳光和笑声。',
    withStory: (story: string) =>
      `亲爱的，${story}这些温暖的瞬间，让我更加珍惜我们在一起的每一刻。谢谢你，让我的世界充满温暖。`,
  },
  humorous: {
    default: '嘿，你还没被我烦跑，真是个奇迹。不过说真的，能和你一起犯傻的日子，是我最快乐的时光。继续一起闹腾吧！',
    withStory: (story: string) =>
      `嘿，${story}虽然我们偶尔会犯傻，但这些傻傻的时光，是我最珍贵的回忆。谢谢你容忍我的小脾气，继续一起创造更多搞笑回忆吧！`,
  },
  literary: {
    default: '岁月如歌，你是最美的旋律。我们的故事在时光里慢慢沉淀，愈发醇厚。愿这份美好，永远延续。',
    withStory: (story: string) =>
      `时光荏苒，${story}这些文字记录了我们的点点滴滴，愿我们的故事，如诗如画，永远美好。`,
  },
  simple: {
    default: '谢谢你，一直在我身边。爱你。',
    withStory: (story: string) => `${story}谢谢你，一直在我身边。爱你。`,
  },
}

// Generate greeting
router.post('/greeting', (req, res) => {
  const { style, story } = req.body

  if (!style || !greetings[style]) {
    return res.status(400).json({ error: 'Invalid style' })
  }

  const styleGreetings = greetings[style]
  const content = story
    ? styleGreetings.withStory(story)
    : styleGreetings.default

  res.json({
    id: Math.random().toString(36).substring(2, 15),
    style,
    content,
    createdAt: new Date().toISOString(),
  })
})

export default router
