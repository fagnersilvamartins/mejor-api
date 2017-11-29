var Schedule = require('../models/schedule.model');
var FreeDate = require('../models/free-date.model');
var passport = require('passport');
var httpStatus = require('http-status');

function create(req, res, next) {
    if (validateParams(req)) {
        const body = JSON.parse(Object.keys(req.body)[0]);
        passport.authenticate('instagram-token', (user) => {
            FreeDate.findById(body.id_date, function (err, freeDate) {
                if (err) {
                    return next({ 'message': err });
                }
                freeDate.enable = false;
                freeDate.save((err) => {
                    if (err) {
                        return next({ 'message': err });
                    }
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    const schedule = new Schedule({
                        id_user: body.id_user,
                        id_date: body.id_date,
                    });
                    schedule.save((err) => {
                        if (err) {
                            return next({ 'message': err });
                        }
                        return res.json(schedule);
                    });
                });
            });
        })(req, res, next);
    } else {
        return next({ 'message': 'Invalid params' });
    }
}

function allDates(req, res, next) {
    passport.authenticate('instagram-token', () => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        FreeDate.find({}, function (err, freeDates) {
            if (err) {
                return next(err);
            }
            return res.json(freeDates);
        });
    })(req, res, next);
}

function validateParams(req) {
    if (req.body) {
        return true;
    }
    return false;
}


module.exports = { allDates, create };