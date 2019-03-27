var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  text: {
    type: String
  }
  });

module.exports = mongoose.model('Questions', QuestionSchema);