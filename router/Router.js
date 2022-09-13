const express = require("express");
const router = express.Router();
// const path=require('path')

// const auth=require('./jwt/auth')
// const jwtVerify=require('./jwt/jwtVerify')
const customers = require("../auth/Router");
const hosting = require("../hosting/Router");
const pochta = require("../pochta/Router");
const whois = require("../whois/Router");
const contact = require("../contact/Router");
const order = require("../order/Router");


// router
// router.use('/login',auth)
// router.use(jwtVerify)
router.use("/customers", customers);
router.use("/hosting", hosting);
router.use("/pochta", pochta);
router.use("/whois", whois);
router.use("/contact", contact);
router.use("/order", order);
    

module.exports = router;
