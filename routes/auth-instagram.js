var express = require('express');
var loginCtrl = require('../controllers/login.controller');

var router = express.Router();
router.get('/instagram', loginCtrl.login);

module.exports = router;