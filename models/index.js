var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

module.exports.SFfavSpot = require("/models/sffavspot.js");


var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SFfavSpot = new Schema({
  description: String
});

var SFfavSpot = mongoose.model('SFfavSpot', SFfavSpotSchema);

module.exports = SFfavSpot;

