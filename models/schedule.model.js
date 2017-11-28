var mongoose = require('../config/database');
var httpStatus = require('http-status');

/**
 * Schedule Schema
 */
const ScheduleSchema = new mongoose.Schema({
    id_user: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

ScheduleSchema.statics = {
    get(id) {
        return this.findOne({ 'id_user': id })
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
 * @typedef Schedule
 */
module.exports = mongoose.model('Schedule', ScheduleSchema);