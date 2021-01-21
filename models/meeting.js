const mongoose = require('mongoose')

const meetingSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required:true
        },
        date: {
            type: String,
            trim: true,
            required: true
        },
        time: {
            type: String,
            trim: true,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Meeting = mongoose.model('Meeting', meetingSchema)

module.exports = Meeting
