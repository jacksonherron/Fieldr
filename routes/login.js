const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/login', ctrl.usersCtrl.newSession);
router.post('/login', ctrl.usersCtrl.createSession);

module.exports = router;