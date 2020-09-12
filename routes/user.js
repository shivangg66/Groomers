const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
//Dummy Api
router.get('/',(req,res)=>res.send('User api'));

// @route POST api/user/registerUser
// @desc register user
router.post('/registerUser', userController.userRegister());

module.exports = router;