import type { NextApiRequest, NextApiResponse } from 'next'

const STYLE_PROMPTS: Record<string, string> = {
  romantic: '请用浪漫深情的风格，生成一段温馨感人的祝福语。语言要优美动人，充满爱意，让人感受到浓浓的浪漫氛围。',
  warm: '请用温馨感人的风格，生成一段温暖人心的祝福语。语言要真挚感人，让人感受到温暖和幸福。',
  humorous: '请用幽默风趣的风格，生成一段轻松有趣的祝福语。语言要诙谐幽默，让人会心一笑。',
  literary: '请用文艺清新的风格，生成一段诗意盎然的祝福语。语言要优美如诗，意境深远，富有文学气息。',
  minimalist: '请用简约精炼的风格，生成一段简洁有力的祝福语。语言要精炼，直击心灵，言简意赅。',
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '只支持 POST 请求' })
  }

  const { story, style } = req.body

  if (!style || !STYLE_PROMPTS[style]) {
    return res.status(400).json({ error: '请选择有效的祝福风格' })
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'API 密钥未配置' })
  }

  try {
    const systemPrompt = `你是一位专业的祝福语撰写专家，擅长为各种纪念日和特殊场合创作个性化的祝福语。
你的祝福语要符合中文语境，自然流畅，富有感染力。
请根据用户提供的故事和风格要求，生成一段独特的祝福语。
祝福语长度控制在100-200字之间。`

    const userPrompt = `${STYLE_PROMPTS[style]}
${story ? `\n用户的故事或描述：${story}` : '\n用户没有提供具体故事，请创作通用的祝福语。'}
${story ? '\n请根据这个故事，创作个性化的祝福语。' : ''}`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.8,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error?.message || 'AI 服务调用失败')
    }

    const data = await response.json()
    const blessing = data.choices[0]?.message?.content?.trim()

    if (!blessing) {
      throw new Error('未能生成祝福语')
    }

    return res.status(200).json({ blessing })
  } catch (err) {
    console.error('生成祝福语失败:', err)
    return res.status(500).json({
      error: err instanceof Error ? err.message : '生成祝福语时发生错误'
    })
  }
}
