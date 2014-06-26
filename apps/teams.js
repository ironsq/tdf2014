var team = require("./model/team");

// Rider
var RiderModel = team.RiderModel();

// Team
var TeamModel = team.TeamModel();


/**
 *  Find team by filter
 * @param body
 * @param callback
 */
exports.teamList = function teamList(body, callback) {
    var nation = body.nation;
    var bicycleBrand = body.bicycles;
    var filter = {};

    if (nation) {
        filter['nation'] = nation;
    }

    if (bicycleBrand) {
        filter['bicycles'] = bicycleBrand;
    }

    TeamModel.find(filter).populate({path: 'riders', select: 'name'}).exec(function(err, result) {
        if(err) console.log("An error ocurred while populating rider data.");
        else {
            console.log("Team with Riders: " + result);
            callback("", result);
        }
    });
};

/**
 * Find riders by filter
 * @param riderIds
 * @param callback
 */
exports.teamRiders = function teamRiders(riderIds, callback) {

    RiderModel.find({team: "Ag2r-La mondiale"}, function (err, riders) {
        if(err){console.error((err))}
        else {



            callback("", riders);
        }
    });

};
