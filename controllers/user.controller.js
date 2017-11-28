var User = require('../models/user.model');
var passport = require('passport');
var httpStatus = require('http-status');

function create(params) {
    const user = new User({
        id_instagram: params.id_instagram,
        username: params.username,
        full_name: params.full_name,
        image: params.image
    });
    user.save();
    return user;
}

function findByIdInstagram(id) {
    return User.get(id);
}

function getUserById(req, res, next) {
    if (req.params.id) {
        passport.authenticate('instagram-token', (user) => {
            findByIdInstagram(req.params.id).then(function (data) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                if (data == httpStatus.NOT_FOUND) {
                    return next({'message': httpStatus.NOT_FOUND});
                }
                return res.json(user);
            });
        })(req, res, next);
    } else {
        return next({'message': 'Invalid params'});
    }
}

module.exports = { create, findByIdInstagram, getUserById };