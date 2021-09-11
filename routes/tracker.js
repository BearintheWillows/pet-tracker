const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const petController = require("../controllers/petController");
//Require router modules

/// Auth Routes ///

///

//GET request login/Homepage page.
router.get("/", authController.index);

//GET famile page on login/register
router.get("/user/home", userController.home);

//GET create a pet page
router.get("/user/create-pet", userController.createPet);

//GET Pet home
router.get("/user/pet/home", petController.petHome);

//GET Pet Details page
router.get("/user/pet/details", petController.petDetails);

//GET Add/edit Trackable page
router.get("/user/pet/trackable", petController.addTrackable);

module.exports = router;
