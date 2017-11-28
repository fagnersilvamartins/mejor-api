var passport = require('passport');
var userCtrl = require('../controllers/user.controller');
var httpStatus = require('http-status');

function allDates(req, res, next) {
    passport.authenticate('instagram-token', () => {
        return res.json(dates());
    })(req, res, next);
}

function dates() {
    return [
        {
            date: new Date(2017, 12, 2),
            times: [
                '8:00', '10:00', '14:00', '16:00', '18:00'
            ]
        },
        {
            date: new Date(2017, 12, 9),
            times: [
                '8:00', '10:00', '14:00', '16:00', '18:00'
            ]
        },
        {
            date: new Date(2017, 12, 16),
            times: [
                '8:00', '10:00', '14:00', '16:00', '18:00'
            ]
        },
        {
            date: new Date(2017, 12, 23),
            times: [
                '8:00', '10:00', '14:00', '16:00', '18:00'
            ]
        },
        {
            date: new Date(2017, 12, 30),
            times: [
                '8:00', '10:00', '14:00', '16:00', '18:00'
            ]
        }
    ]
}

module.exports = { allDates };