var mongoose = require("mongoose");
var mSchema = mongoose.Schema;

// Rider
var riderSchema = new mSchema ({
    _id: mSchema.Types.ObjectId,
    name: String,
    nation: String,
    team: String
});

var Rider = mongoose.model('Rider', riderSchema);
exports.RiderModel = function RiderModel() {
    return Rider;
};

// Team
var teamSchema = new mSchema({
    _id: mSchema.Types.ObjectId,
    name: String,
    nation: String,
    UCI: String,
    bicycles: String,
    riders: [{type: mSchema.Types.ObjectId, ref: 'Rider'}]
});

var Team = mongoose.model('Team', teamSchema);
exports.TeamModel = function TeamModel() {
    return Team;
};
