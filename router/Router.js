const express = require("express");
const router = express.Router();
// const path=require('path')

// const auth=require('./jwt/auth')
// const jwtVerify=require('./jwt/jwtVerify')
const user=require('../user/UserRouter')
// router
// router.use('/login',auth)
// router.use(jwtVerify)
router.use('/user',user)




module.exports = router;