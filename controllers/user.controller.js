var User = require('../models/user.model');

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

module.exports = { create, findByIdInstagram };