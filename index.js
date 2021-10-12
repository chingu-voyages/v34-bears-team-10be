import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const port = process.env.PORT

app.get('/status', (req, res) => {
  res.status(200).end()
})

app.listen(port, ()=> {
  console.log(`App listening at ${port}`)
})
