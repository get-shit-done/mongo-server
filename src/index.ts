import express from 'express'
import { router } from './routes/loginRoutes'
import bodyParser from 'body-parser'

const app = express()

// app.get('/', (req, res) => {
//   res.send('helldsdso a')
// })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen(3333, () => {
  console.log('listesssdsdssdsning')
})
