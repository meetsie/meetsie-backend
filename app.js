const express = require('express')
require('./db/mongoose')
const meetingRouter = require('./routers/meeting')

const app = express()
app.use(express.json())
app.use(meetingRouter)

module.exports = app
