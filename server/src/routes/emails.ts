import { Router } from 'express'

const router = Router()

// In-memory store for demo
const emails = new Map<string, any>()

// Get email preview
router.get('/:id/preview', (req, res) => {
  const { id } = req.params

  // Demo response
  res.json({
    id,
    subject: '💕 一份来自三年前的礼物',
    body: '亲爱的，三年前的今天，我们的故事开始了...',
    photos: [],
    sendAt: null,
    status: 'draft',
  })
})

// Update email
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { subject, body, photos } = req.body

  const email = {
    id,
    subject: subject || '💕 一份来自三年前的礼物',
    body: body || '',
    photos: photos || [],
    updatedAt: new Date().toISOString(),
  }

  emails.set(id, email)
  res.json(email)
})

// Schedule email
router.post('/:id/schedule', (req, res) => {
  const { id } = req.params
  const { sendAt } = req.body

  if (!sendAt) {
    return res.status(400).json({ error: 'sendAt is required' })
  }

  const email = emails.get(id) || { id }
  email.sendAt = sendAt
  email.status = 'pending'
  emails.set(id, email)

  res.json({ message: 'Email scheduled successfully', email })
})

export default router
