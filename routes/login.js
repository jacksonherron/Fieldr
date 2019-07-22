const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.usersCtrl.newSession);
router.post('/', ctrl.usersCtrl.createSession);

module.exports = router;