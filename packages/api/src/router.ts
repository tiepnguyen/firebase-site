import { Router } from 'express'

export const router = Router()

router.get('/hello', (req, res) => {
  res.send('Hello from the router!')
})

router.get('/time', (req, res) => {
  res.send(new Date().toLocaleString())
})
