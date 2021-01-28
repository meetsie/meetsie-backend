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
        const meeting = await Meeting.findOne({_id})
        if (!meeting) {
            return res.status(404).send();
        }
        res.send(meeting)
    }
    catch (e) {
        res.status(500).send(e)
    }

})

router.patch('/edit_meeting/:id', async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body);
    const allowedUpdates = ["names","time"]
    const isUpdateAllowed = updates.every((update) => allowedUpdates.includes(update));

    if (!isUpdateAllowed) {
        return res.status(400).send({ error: "Invalid updates!" })
    }

    try {
        const meeting = await Meeting.findOne({_id})
        updates.forEach((update) => { meeting[update] = req.body[update] })
        await meeting.save()

        if (!meeting) {
            return res.status(404).send();
        }
        res.send(meeting)
    }
    catch (e) {
        res.status(400).send(e)
    }

})



module.exports = router;