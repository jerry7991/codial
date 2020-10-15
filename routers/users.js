const express = require('express');
const router = express.Router();

//  First get the controller of current router
const usersControlers = require('../controllers/users_controler');

// Now route this user to user_controler's profile action
router.get('/profile', usersControlers.profile);


// Cotroller for router post
router.get('/posts', usersControlers.posts);
// Export router to globally use
module.exports = router;