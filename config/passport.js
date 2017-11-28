var passport = require('passport');
var config = require('./config');
var InstagramTokenStrategy = require('passport-instagram-token');

passport.use(new InstagramTokenStrategy({
    clientID: config.instagram.client_id,
    clientSecret: config.instagram.client_secret,
    passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, next) {
    const data = profile._json.data;
    return next({
        id_instagram: data.id,
        username: data.username,
        full_name: data.full_name,
        image: data.profile_picture
    });
}));

module.exports = passport;