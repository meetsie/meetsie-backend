const express = require('express')
const Meeting = require('../models/meeting')
const router = new express.Router()

router.post('/post_meeting', async (req, res) => {
    const meeting = new Meeting({
        ...req.body
    })

    try {
        await meeting.save()
        res.status(201).send(meeting)
    }
    catch (e) {
        res.status(400).send(e)
    }

})

router.get('/get_meeting/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const meeting = await meeting.findOne({_id})
        if (!meeting) {
            return res.status(404).send();
        }
        res.send(meeting)
    }
    catch (e) {
        res.status(500).send(e)
    }

})



module.exports = router;