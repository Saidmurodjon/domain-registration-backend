const express = require('express')
const router = express.Router()
const pochta = require('./controller')


// get
router.route('/').get(pochta.Get)
// post
router.route('/').post(pochta.Post)
// update
router.route('/:id').put(pochta.Update)
// delete
router.route('/:id').delete(pochta.Delete)


module.exports = router