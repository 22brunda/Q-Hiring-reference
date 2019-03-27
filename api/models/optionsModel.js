var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OptionSchema = new Schema({
  name: {
    type: String
  },

  is_valid: {
  	type: Boolean
  }
  });

module.exports = mongoose.model('Options', OptionSchema);