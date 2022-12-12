require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//db connection
const dbConnect = require('./db/dbConnect')

app.use(bodyParser.json())

const port = process.env.PORT || 3000

const start = async (req, res) => {
  try {
    await dbConnect(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`App is starting on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()

module.exports = app
