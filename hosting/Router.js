const express = require('express')
const router = express.Router()
const hosting = require('./controller')


// get
router.route('/').get(hosting.Get)
// post
router.route('/').post(hosting.Post)
// update
router.route('/:id').put(hosting.Update)
// delete
router.route('/:id').delete(hosting.Delete)


module.exports = router