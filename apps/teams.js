var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Team Schema
var teamSchema = new Schema({
    name: String,
    nation: String
}, {collection: 'teams'});

console.log('team.js');
mongoose.connect('mongodb://tdf2014:fwe032GyHan!@ds061928.mongolab.com:61928/letour');
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Team model
var Team = mongoose.model('Team', teamSchema);

exports.teamList = function teamList(body, callback) {
    var nation = body.nation;
    var bicycleBrand = body.bicycles;
    var filter = {};

    if(nation) {
        filter['nation'] = nation;
    }

    if(bicycleBrand) {
        filter['bicycles'] = bicycleBrand;
    }

    Team.find(filter, function(err, teams) {
       if(err) {
           console.log(err);
       } else {
           callback("", teams);
       }
    });
};
