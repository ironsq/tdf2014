/** Dependencies **/
var express = require('express');
var logfmt = require("logfmt");
var bodyParser = require("body-parser");

var compass = require("./apps/compass");
var index = require("./routes/index");

var server = express();

//Init logging
server.use(logfmt.requestLogger());
server.use(bodyParser.json());
server.use('/www', express.static(__dirname + '/www'));

/** Route on GET **/
server.use('/', index);

/** Posts **/
server.post('/compass', function(req, res){
    var body = req.body;
    var team = compass.parseCompassForm(body);
    console.log(team);
    res.json(team.toUpperCase());
});

/** Server **/
var port = Number(process.env.PORT || 5000);
server.listen(port, function() {
    console.log("Listening on port " + port);
});