const express = require('express')
const router = express.Router()
const order = require('./controller')


// get
router.route('/').get(order.Get)
// post
router.route('/').post(order.Post)
// update
router.route('/:id').put(order.Update)
// delete
router.route('/:id').delete(order.Delete)


module.exports = router