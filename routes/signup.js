const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/', ctrl.usersCtrl.createUser);
router.get('/', ctrl.usersCtrl.newUser);

module.exports = router;