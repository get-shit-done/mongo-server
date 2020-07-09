import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieSession from 'cookie-session'
import { AppRouter } from './AppRouter'

import './controllers/LoginController'
import './controllers/RootController'

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['laskdjf'] }))
app.use(AppRouter.getInstance())


server.listen(3333, () => {
  console.log('listesssdsdssdsning')
})
