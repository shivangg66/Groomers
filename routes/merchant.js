const express = require('express');
const { authController } = require('../controller');
const router = express.Router();

//Dummy Api
router.get('/',(req,res)=>res.send('Merchant api'));

//Merchant Login/Signup
router.post("/merchant/signup", authController.merchnatSignup);
router.post("/merchant/login", authController.merchnatLogin);

//Api for Services

//Adding a new Service
router.post("/service", authController.addService);
module.exports = router;