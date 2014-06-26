var mongoose = require("mongoose");

exports.connect = function connect() {
    mongoose.connect('mongodb://tdf2014:fwe032GyHan!@ds061928.mongolab.com:61928/letour');
    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}