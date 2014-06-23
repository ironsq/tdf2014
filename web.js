/** Dependencies **/
var express = require('express');
var logfmt = require("logfmt");
var bodyParser = require("body-parser");

var compass = require("./apps/compass");
//var mongo = require("./apps/mongo");
var teams = require("./apps/teams");
var index = require("./routes/index");

var server = express();

//Init logging
server.use(logfmt.requestLogger());
server.use(bodyParser.urlencoded());
server.use('/www', express.static(__dirname + '/www'));

/** Route on GET **/
server.use('/', index);

server.post('/teams', function(req, res){
    teams.teamList(req.body, function(err, result) {
        res.send(result);
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
//var port = Number(process.env.PORT || 6000);
var port = Number(8080);
console.log(process.env.PORT);
console.log(port);
server.listen(port, function() {
    console.log("Listening on port: " + port);
});