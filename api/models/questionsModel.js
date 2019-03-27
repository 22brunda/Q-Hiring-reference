var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  text: {
    type: String
  },
  options : [{ type: Schema.Types.ObjectId, ref: 'Options' }]
  });

module.exports = mongoose.model('Questions', QuestionSchema);