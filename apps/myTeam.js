var mongoose = require("mongoose");
var mSchema = mongoose.Schema;

mongoose.connect('mongodb://tdf2014:fwe032GyHan!@ds061928.mongolab.com:61928/letour');
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var myTeamSchema = mSchema({
    _id: mSchema.Types.ObjectId,
    name: String,
    riders: [{type: mSchema.Types.ObjectId, ref: 'Riders'}]
});
var MyTeam = mongoose.model('MyTeam', myTeamSchema);

var riderSchema= mSchema({
    _id: mSchema.Types.ObjectId,
    name: String,
    team: String
});
var Rider = mongoose.model('Rider', riderSchema);

var myNewTeam = new MyTeam({_id: 0, name: "My Lucky Dip"});

/*myNewTeam.save(function(err){
    if(err){}
    console.log('Saved');
});*/

Rider.findOne({name: "Thomas Voeckler", team: "Team Europcar"}, function(err, rider){
    myNewTeam.riders.push(rider._id);

    Rider.findOne({_id: rider._id}, function(err, found){
        console.log(found);
    })
});

//myNewTeam.riders.push(myNewRider._id);


