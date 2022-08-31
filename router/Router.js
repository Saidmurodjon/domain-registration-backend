const express = require("express");
const router = express.Router();
// const path=require('path')

// const auth=require('./jwt/auth')
// const jwtVerify=require('./jwt/jwtVerify')
const user=require('../user/UserRouter')
const hosting=require('../hosting/Router')
// router
// router.use('/login',auth)
// router.use(jwtVerify)
router.use('/user',user)
router.use('/hosting',hosting)




module.exports = router;