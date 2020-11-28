const express = require('express');
const { authController } = require('../controller');
const router = express.Router();

//Dummy Api
router.get('/',(req,res)=>res.send('Merchant api'));

router.post("/merchantSignup", authController.merchnatSignup);
router.post("/merchantLogin", authController.merchnatLogin);
module.exports = router;