const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

//Require router modules

/// Auth Routes ///

///

//GET request login/Homepage page.
router.get("/", authController.index);

//GET famile page on login/register
router.get("/user/home", userController.home);

module.exports = router;
