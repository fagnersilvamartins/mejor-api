var passport = require('passport');
var userCtrl = require('../controllers/user.controller');
var httpStatus = require('http-status');

function login(req, res, next) {
    passport.authenticate('instagram-token', (user) => {
        userCtrl.findByIdInstagram(user.id_instagram).then(function (data) {
            if (data == httpStatus.NOT_FOUND) {
                return res.json(userCtrl.create(user));
            } 
            return res.json(user);
        });
    })(req, res, next);
}

module.exports = { login };
