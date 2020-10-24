const express = require("express");
const router = express.Router();
const { authController, defaultHandler } = require("../controller");
//Dummy Api
router.get("/", defaultHandler);

// @route POST api/user/registerUser
// @desc register user
router.post("/signup", authController.userSignUp);
router.post("/login", authController.userLogin);
module.exports = router;
