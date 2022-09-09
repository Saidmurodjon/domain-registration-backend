const express = require('express')
const router = express.Router()
const domain = require('./controller')


// post
router.route('/').post(domain.Post)



module.exports = router