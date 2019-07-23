const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.postsCtrl.showProfile);

module.exports = router;