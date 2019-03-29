var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: {
    type: String
  }
});

module.exports = mongoose.model('Questions', QuestionSchema);