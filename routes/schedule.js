var express = require('express');
var scheduleCtrl = require('../controllers/schedule.controller');

var router = express.Router();

router.get('/alldates', scheduleCtrl.allDates);

router.post('/', scheduleCtrl.create);

module.exports = router;
