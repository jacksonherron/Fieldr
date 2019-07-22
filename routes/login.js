const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

<<<<<<< HEAD
=======
router.get('/login', ctrl.usersCtrl.newSession);
router.post('/login', ctrl.usersCtrl.createSession);

>>>>>>> c9fde51222c2bb2c518c59a4880d309efa84e46f
module.exports = router;