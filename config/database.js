var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.db.uri, { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;