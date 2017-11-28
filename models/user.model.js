var mongoose = require('../config/database');
var httpStatus = require('http-status');

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

UserSchema.statics = {
    /**
     * Get user
     * @param {ObjectId} id - The objectId of user.
     * @returns {Promise<User, APIError>}
     */
    get(id) {
      return this.findOne({ 'id_instagram': id })
        .exec()
        .then((user) => {
          if (user) {
            return user;
          }
          return httpStatus.NOT_FOUND;
        });
    }    
  };

/**
 * @typedef User
 */
module.exports = mongoose.model('User', UserSchema);