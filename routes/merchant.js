const express = require('express');
const router = express.Router();

//Dummy Api
router.get('/',(req,res)=>res.send('Merchant api'));

module.exports = router;