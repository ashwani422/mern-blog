import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

import usersRouter from './routes/usersRoutes.js'

const app = express()
const port = process.env.PORT || 8000
const db = process.env.DB || "mern-blog"


app.use(morgan('dev'))  // http req logger middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.json({response: 'working'})
})
app.use('/users', usersRouter)


async function main() {
  await mongoose.connect(`mongodb://localhost:27017/${db}`, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log(`Connected to database: ${db}`)
  app.listen(port, () => console.log(`Listening at: http://localhost:${port}`))
}

main().catch(err => console.log(err))