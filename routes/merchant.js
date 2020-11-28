const express = require('express');
const { authController } = require('../controller');
const router = express.Router();

//Dummy Api
router.get('/',(req,res)=>res.send('Merchant api'));

//Merchant Login/Signup
router.post("/merchantSignup", authController.merchnatSignup);
router.post("/merchantLogin", authController.merchnatLogin);

//Api for Services

//Adding a new Service
router.post("/addService", authController.addService);

module.exports = router;