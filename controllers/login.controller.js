var passport = require('passport');

function login(req, res, next) {
    passport.authenticate('instagram-token', (user) => {
        return res.json(user);
    })(req, res, next);
}

module.exports = { login };
