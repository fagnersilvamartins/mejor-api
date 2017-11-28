var Schedule = require('../models/schedule.model');
var passport = require('passport');
var httpStatus = require('http-status');

function create(req, res, next) {
    if (validateParams(req)) {
        const body = JSON.parse(Object.keys(req.body)[0]);
        passport.authenticate('instagram-token', (user) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            const schedule = new Schedule({
                id_user: body.id_user,
                date: body.date,
            });
            schedule.save((err) => {
                if (err) {
                    return next({ 'message': 'Invalid params' });
                }
                return res.json(schedule);
            });
        })(req, res, next);
    } else {
        return next({ 'message': 'Invalid params' });
    }
}

function allDates(req, res, next) {
    passport.authenticate('instagram-token', () => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.json(dates());
    })(req, res, next);
}

function validateParams(req) {
    if (req.body) {
        return true;
    }
    return false;
}

function dates() {
    return [
        {
            date: new Date(2017, 11, 2),
            times: [
                '8:00', '10:00', '14:00', '16:00', '18:00'
            ]
        },
        {
            date: new Date(2017, 11, 9),
            times: [
                '7:00', '9:00', '13:00', '15:00', '17:00'
            ]
        },
        {
            date: new Date(2017, 1, 16),
            times: [
                '8:00', '10:00', '14:00', '16:00', '18:00'
            ]
        },
        {
            date: new Date(2017, 11, 23),
            times: [
                '9:00', '11:00', '15:00', '17:00', '19:00'
            ]
        },
        {
            date: new Date(2017, 11, 30),
            times: [
                '8:00', '10:00', '14:00', '16:00', '18:00'
            ]
        }
    ]
}

module.exports = { allDates, create };