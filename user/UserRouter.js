const express = require('express')
const router = express.Router()
const user = require('./UserController')


// get
router.route('/').get(user.GetUser)
// post
router.route('/').post(user.PostUser)

module.exports = router