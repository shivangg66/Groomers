const express = require("express");
const router = express.Router();
const AuthController = require("../controller/auth.controller");


// @route POST api/user/registerUser
// @desc register user
router.post("/signup", new AuthController().userSignUp);
router.post("/login", new AuthController().userLogin);
module.exports = router;
