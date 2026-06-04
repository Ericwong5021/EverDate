import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = Router()

// In-memory store for demo (replace with PostgreSQL in production)
const anniversaries = new Map<string, any>()

// Create anniversary
router.post('/', (req, res) => {
  const { title, date, type, partnerName, description } = req.body

  if (!title || !date || !type || !partnerName) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const id = uuidv4()
  const anniversary = {
    id,
    title,
    date,
    type,
    partnerName,
    description: description || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  anniversaries.set(id, anniversary)
  res.status(201).json(anniversary)
})

// Get anniversary by ID
router.get('/:id', (req, res) => {
  const { id } = req.params
  const anniversary = anniversaries.get(id)

  if (!anniversary) {
    return res.status(404).json({ error: 'Anniversary not found' })
  }

  res.json(anniversary)
})

// Update anniversary
router.put('/:id', (req, res) => {
  const { id } = req.params
  const anniversary = anniversaries.get(id)

  if (!anniversary) {
    return res.status(404).json({ error: 'Anniversary not found' })
  }

  const updated = {
    ...anniversary,
    ...req.body,
    id,
    updatedAt: new Date().toISOString(),
  }

  anniversaries.set(id, updated)
  res.json(updated)
})

// Delete anniversary
router.delete('/:id', (req, res) => {
  const { id } = req.params

  if (!anniversaries.has(id)) {
    return res.status(404).json({ error: 'Anniversary not found' })
  }

  anniversaries.delete(id)
  res.status(204).send()
})

export default router
