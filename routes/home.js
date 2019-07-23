const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.postsCtrl.showHomePage);
router.post('/', ctrl.postsCtrl.createSession);

module.exports = router;