var mongoose = require("mongoose");
//var mSchema = mongoose.Schema;

var team = require("../model/team");

var RiderModel = team.RiderModel();
var TeamModel = team.TeamModel();


exports.addRiders = function addRiders() {
    var teamName = "Team NetApp-Endura";

    TeamModel.findOne({name: teamName}, function (err, team) {
        if (err) console.log(err);
        else {

            RiderModel.find({team: teamName}, function (err, teamRiders) {
                if (err) console.log(err);
                else {
                    team.riders = [];
                    for (var i = 0; i < teamRiders.length; i++) {
                        team.riders.push(teamRiders[i]._id);
                    }
                    console.log(team);
                    team.save();
                }
            });
        }
    });
};
