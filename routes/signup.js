const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/', ctrl.usersCtrl.createUser)

module.exports = router;