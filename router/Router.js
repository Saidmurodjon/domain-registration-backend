const express = require("express");
const router = express.Router();
// const path=require('path')

// const auth=require('./jwt/auth')
// const jwtVerify=require('./jwt/jwtVerify')
const user = require("../auth/Router");
const hosting = require("../hosting/Router");
const pochta = require("../pochta/Router");
const whois = require("../whois/Router");

// router
// router.use('/login',auth)
// router.use(jwtVerify)
router.use("/user", user);
router.use("/hosting", hosting);
router.use("/pochta", pochta);
router.use("/whois", whois);

module.exports = router;
