var FreeDate = require('../models/free-date.model');

function populateFreeDates() {
    FreeDate.find({}, function (err, freeDate) {
        if (err || freeDate.length == 0) {
            populate();
        }
    });
}

function populate() {
    console.log('populating dates');
    const dates = getDates();
    for (var i in dates) {
        let freeDate = new FreeDate({ date: dates[i] });
        freeDate.save((err) => {
            if (err) {
                console.log(err);
            } else {
                if (dates.length - 1 == i) {
                    console.log('Finished');
                } else {
                    console.log('...');
                }
            }
        });
    }
}

function getDates() {
    return [
        new Date(2017, 11, 2, 8, 00),
        new Date(2017, 11, 2, 10, 00),
        new Date(2017, 11, 2, 14, 00),
        new Date(2017, 11, 2, 16, 00),
        new Date(2017, 11, 2, 18, 00),
        new Date(2017, 11, 9, 7, 00),
        new Date(2017, 11, 9, 9, 00),
        new Date(2017, 11, 9, 13, 00),
        new Date(2017, 11, 9, 5, 00),
        new Date(2017, 11, 9, 17, 00),
        new Date(2017, 11, 16, 8, 00),
        new Date(2017, 11, 16, 10, 00),
        new Date(2017, 11, 16, 14, 00),
        new Date(2017, 11, 16, 16, 00),
        new Date(2017, 11, 16, 18, 00),
        new Date(2017, 11, 23, 9, 00),
        new Date(2017, 11, 23, 11, 00),
        new Date(2017, 11, 23, 15, 00),
        new Date(2017, 11, 23, 17, 00),
        new Date(2017, 11, 23, 19, 00),
        new Date(2017, 11, 30, 8, 00),
        new Date(2017, 11, 30, 10, 00),
        new Date(2017, 11, 30, 14, 00),
        new Date(2017, 11, 30, 16, 00),
        new Date(2017, 11, 30, 18, 00),
    ]
}

module.exports = { populateFreeDates: populateFreeDates };