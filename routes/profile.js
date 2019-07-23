const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.usersCtrl.showProfile);

module.exports = router;