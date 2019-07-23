const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//  Sign up
router.post('/signup', ctrl.usersCtrl.createUser);
router.get('/signup', ctrl.usersCtrl.newUser);

// Login
router.get('/login', ctrl.usersCtrl.newSession);
router.post('/login', ctrl.usersCtrl.createSession);
// Log Out
router.get('/logout', ctrl.usersCtrl.deleteSession);

module.exports = router;