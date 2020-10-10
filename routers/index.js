const express = require('express');

//  Call the router module of express
const router = express.Router();

//  Requier home controler

const homeController = require('../controllers/home_controler');
console.log("router loaded");

//  Access home controller
router.get('/', homeController.home);

// Now i need to export this router to use globally
module.exports = router;

