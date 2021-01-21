const express = require('express')
const Meeting = require('../models/meeting')
const router = new express.Router()

router.post('/event', async (req, res) => {
    console.log('getting request')
    console.log(req.body)
    const meeting = new Meeting({
        ...req.body
    })

    try {
        
        await meeting.save()
        print('before save')
        res.status(201).send(meeting)
    }
    catch (e) {
        res.status(400).send(e)
    }

})


module.exports = router;