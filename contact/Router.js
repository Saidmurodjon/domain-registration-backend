const express = require('express')
const router = express.Router()
const contact = require('./controller')


// get
router.route('/').get(contact.Get)
// post
router.route('/').post(contact.Post)
// update
router.route('/:id').put(contact.Update)
// delete
router.route('/:id').delete(contact.Delete)


module.exports = router