const express = require('express');

//  Call the router module of express
const router = express.Router();

//  Requier home controler

const homeController = require('../controllers/home_controler');
console.log("router loaded");

//  Access home controller
router.get('/', homeController.home);


// If any request comes for user then require user's router

router.use('/users', require('./users'));

// Use login controler
router.use('/login', require('./login'));

// Now i need to export this router to use globally
module.exports = router;

