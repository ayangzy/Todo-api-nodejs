require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//db connection
const dbConnect = require('./db/dbConnect')

//routes
const todoRoutes = require('./routes/todoRoute')
const jwtToken = require('./routes/jwtRoute')

//error handlers
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(bodyParser.json())

app.use('/api/v1/todos', todoRoutes)
app.use('/api/v1/generate-jwt-token', jwtToken)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 6000

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
