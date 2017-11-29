var mongoose = require('../config/database');
var httpStatus = require('http-status');

/**
 * FreeDates Schema
 */
const FreeDateSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    enable: {
        type: Boolean,
        default: true
    }
});

FreeDateSchema.statics = {
    get(id) {
        return this.findOne({ '_id': id })
            .exec()
            .then((schedule) => {
                if (schedule) {
                    return schedule;
                }
                return httpStatus.NOT_FOUND;
            });
    }
};

/**
 * @typedef FreeDate
 */
module.exports = mongoose.model('FreeDate', FreeDateSchema);