var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SFfavSpot = new Schema({
  description: String
});

var SFfavSpot = mongoose.model('SFfavSpot', SFfavSpotSchema);

module.exports = SFfavSpot;
