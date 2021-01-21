const express = require('express')
require('.db/mongoose')
const scheduleRouter = require('./routers/schedule')

const app = express()
app.use(express.json())
app.use(scheduleRouter)

module.exports = app
