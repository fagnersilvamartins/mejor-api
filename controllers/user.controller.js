var User = require('../models/user.model');
var passport = require('passport');
var httpStatus = require('http-status');

function create(params) {
    const user = new User({
        id_instagram: params.id_instagram,
        username: params.username,
        name: params.full_name,
        image: params.image
    });
    user.save();
    return user;
}

function findByIdInstagram(id) {
    return User.get(id);
}

function update(req, res, next) {
    if (validateUpdateUser(req)) {
        passport.authenticate('instagram-token', (user) => {            
            findByIdInstagram(req.params.id).then(function (dbUser) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                if (dbUser == httpStatus.NOT_FOUND) {
                    return next({ 'message': httpStatus.NOT_FOUND });
                }
                dbUser.birthday = req.body.birthday;
                dbUser.name = req.body.name;
                dbUser.city = req.body.city;
                dbUser.education = req.body.education;
                dbUser.job = req.body.job;
                dbUser.save((err) => {
                    if (err) {
                        return next({ 'message': 'Invalid params' });
                    }
                    return res.json(dbUser);
                });
            });
        })(req, res, next);
    } else {
        return next({ 'message': 'Invalid params' });
    }
}

function getUserById(req, res, next) {
    if (req.params.id) {
        passport.authenticate('instagram-token', (user) => {
            findByIdInstagram(req.params.id).then(function (data) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                if (data == httpStatus.NOT_FOUND) {
                    return next({ 'message': httpStatus.NOT_FOUND });
                }
                return res.json(user);
            });
        })(req, res, next);
    } else {
        return next({ 'message': 'Invalid params' });
    }
}

function validateUpdateUser(req) {
    if (req.params) {
        if (req.params.id && req.body) {
            return true;
        }
    }
    return false;
}

module.exports = { create, findByIdInstagram, getUserById, update };