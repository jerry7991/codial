const express = require('express');
const router = express.Router();

//  Get the controller for current router
const loginControler = require('../controllers/login_controler');

// Now handle the router
router.get('/', loginControler.login);

// Exports router
module.exports = router;