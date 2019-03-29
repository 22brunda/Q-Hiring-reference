var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OptionSchema = new Schema({
  name: {
    type: String
  },

  is_valid: {
    type: Boolean
  },
  questions : { type: Schema.Types.ObjectId, ref: 'Questions' }
});

module.exports = mongoose.model('Options', OptionSchema);
