var User = require('../models/user.model');

function create(params) {
    const user = new User({
        id_instagram: params.id_instagram,
        username: params.username,
        full_name: params.full_name,
        image: params.image,
    });
    return user.save();
}

function findByIdInstagram(id) {
    User.findOne({ 'id_instagram': id }, (err, user) => {
        return next(err, user);
    });
}

module.exports = { create, findByIdInstagram };