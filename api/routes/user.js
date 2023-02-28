const express = require('express')
const User = require('../models/user')
const router = express.Router()


router.get('/', async(req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.send(`error occured => ${error}`)
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)

    const user = new User({
        name: req.body.name,
        dob: req.body.dob,
    })

    try {
        const result = await user.save()
        res.json(result)
    } catch (error) {
        res.send(`error occured => ${error}`)
    }
})

module.exports = router