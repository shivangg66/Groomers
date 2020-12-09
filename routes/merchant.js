const express = require('express');
const { authController, defaultHandler } = require("../controller");
const router = express.Router();

//Dummy Api
router.get("/", defaultHandler);

//Merchant Login/Signup
router.post("/signup", authController.merchnatSignup);
router.post("/login", authController.merchnatLogin);

//Api for Services

//Adding a new Service
router.post("/addservice", authController.addService);
//Updating a Service
router.put("/service", authController.updateService);
module.exports = router;