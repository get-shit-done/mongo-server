import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'
import { router } from './routes/loginRoutes'

const app = express()
const server = http.createServer(app)

// app.get('/', (req, res) => {
//   res.send('helldsdso a')
// })

app.use(cors())
app.use(router)
app.use(bodyParser.urlencoded({ extended: true }))

server.listen(3333, () => {
  console.log('listesssdsdssdsning')
})
