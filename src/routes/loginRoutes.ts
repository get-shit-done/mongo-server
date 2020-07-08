import { Router } from 'express'

const router = Router()

router.get('/login', (req, res) => {
  console.log('sdsdsd')
  res.json({ success: true })
})

export {
  router,
}
