const express = require('express');
const router = express.Router();

//Require router modules

const pet_controller = require('../controllers/petController')

/// User Routes ///

//GET tracker home page.
router.get('/user/petList', pet_controller.petList.index)
