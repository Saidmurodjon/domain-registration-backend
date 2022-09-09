const express = require('express')
const router = express.Router()
const user = require('./controller')


// post new
router.route('/new').post(user.PostNew)
// post
router.route('/').post(user.Post)
// update
router.route('/:id').put(user.Update)
// delete
router.route('/:id').delete(user.Delete)


module.exports = router