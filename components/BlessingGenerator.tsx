import { useState } from 'react'

type BlessingStyle = 'romantic' | 'warm' | 'humorous' | 'literary' | 'minimalist'

const STYLES: { value: BlessingStyle; label: string; description: string }[] = [
  { value: 'romantic', label: '浪漫', description: '深情款款，充满爱意' },
  { value: 'warm', label: '温馨', description: '温暖人心，感人至深' },
  { value: 'humorous', label: '幽默', description: '轻松有趣，会心一笑' },
  { value: 'literary', label: '文艺', description: '诗意盎然，意境深远' },
  { value: 'minimalist', label: '简约', description: '简洁有力，直击心灵' },
]

export default function BlessingGenerator() {
  const [story, setStory] = useState('')
  const [style, setStyle] = useState<BlessingStyle>('romantic')
  const [generatedBlessing, setGeneratedBlessing] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleGenerate = async () => {
    setIsLoading(true)
    setError('')
    setGeneratedBlessing('')

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ story, style }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '生成失败，请稍后重试')
      }

      setGeneratedBlessing(data.blessing)
    } catch (err) {
      setError(err instanceof Error ? err.message : '生成失败，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedBlessing)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setError('复制失败，请手动复制')
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          故事或描述（可选）
        </label>
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="分享你们的故事，让祝福更加个性化..."
          className="w-full h-32 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          选择祝福风格
        </label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {STYLES.map((s) => (
            <button
              key={s.value}
              onClick={() => setStyle(s.value)}
              className={`p-3 rounded-xl border-2 transition-all ${
                style === s.value
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30'
                  : 'border-gray-200 dark:border-gray-600 hover:border-purple-300'
              }`}
            >
              <div className="font-medium text-gray-800 dark:text-white">{s.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.description}</div>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={isLoading}
        className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? '生成中...' : '生成祝福语'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl">
          {error}
        </div>
      )}

      {generatedBlessing && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-800 dark:text-white">生成的祝福语</h3>
            <button
              onClick={handleCopy}
              className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              {copied ? '已复制 ✓' : '复制到剪贴板'}
            </button>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl whitespace-pre-wrap text-gray-800 dark:text-gray-200">
            {generatedBlessing}
          </div>
        </div>
      )}
    </div>
  )
}
