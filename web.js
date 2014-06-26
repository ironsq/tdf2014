/** Dependencies **/
var express = require('express');
var logfmt = require("logfmt");
var bodyParser = require("body-parser");

var mongo = require("./apps/mongo");
var compass = require("./apps/compass");
//var fantasy = require("./apps/myTeam");
var teams = require("./apps/teams");
var index = require("./routes/index");

var server = express();

//Init
server.use(logfmt.requestLogger());
server.use(bodyParser.urlencoded());
server.use('/www', express.static(__dirname + '/www'));

// Connect to MongoDB
mongo.connect();


/** Route on GET **/
server.use('/', index);

server.post('/teams', function(req, res){
    teams.teamList(req.body, function(err, teamList) {
       res.send(teamList);
    });
});


/** Posts **/
server.post('/compass', function(req, res) {
    var body = req.body;
    var team = compass.parseCompassForm(body);
    console.log(team);
    res.json(team.toUpperCase());
});

/** Server **/
var port = Number(process.env.PORT || 8080);
server.listen(port, function() {
    console.log("Listening on port: " + port);
});