const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')


//Require router modules



/// Auth Routes ///

///

//GET request login/Homepage page.
router.get('/', authController.index)

//POST request for login

//GET register page
router.get('/register', authController.registerGET)

//POST request to register
router.post('/register', authController.registerPost)

/// Tracker Routes ///

//Get for Pet List (User homepage)
router.get('/user/:id/petlist', userController.petListGet)

//

module.exports = router;