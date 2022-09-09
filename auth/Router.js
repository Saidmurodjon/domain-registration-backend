const express = require('express')
const router = express.Router()
const customers = require('./controller')


// post new
router.route('/new').post(customers.Register)
// post
router.route('/').post(customers.Post)
// update
router.route('/:id').put(customers.Update)
// delete
router.route('/:id').delete(customers.Delete)


module.exports = router