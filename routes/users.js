var express = require('express');
var userCtrl = require('../controllers/user.controller');

var router = express.Router();

/* GET users listing. */
router.get('/:id', userCtrl.getUserById);

router.post('/:id', userCtrl.update);

module.exports = router;

