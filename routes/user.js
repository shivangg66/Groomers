const express = require('express');
const router = express.Router();

//Dummy Api
router.get('/',(req,res)=>res.send('User api'));

module.exports = router;