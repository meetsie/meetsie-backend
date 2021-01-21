const mongoose = require('mongoose')

const scheduleSchema = mongoose.Schema(
    {

    }
)

const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = Schedule
