const express = require('express')
const router = express.Router()
const whois = require('./controller')


// post
router.route('/').get(whois.Whois)



module.exports = router