var mongoose = require('mongoose');

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
    id_instagram: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

/**
 * @typedef User
 */
module.exports = mongoose.model('User', UserSchema);