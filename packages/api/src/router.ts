import { Router } from 'express'

export const router = Router()

router.get('/hello', (req, res) => {
  res.send('Hello from the router!')
})
