const express = require('express');
const AuthController = require("../controller/auth.controller");
const router = express.Router();



//Merchant Login/Signup
router.post("/signup", new AuthController().merchantSignup);
router.post("/login", new AuthController().merchantLogin);

//Api for Services

//Adding a new Service
router.post("/addservice", new AuthController().addService);
//Updating a Service
router.put("/service", new AuthController().updateService);
module.exports = router;