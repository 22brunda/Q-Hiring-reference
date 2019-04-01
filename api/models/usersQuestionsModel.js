var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserQuestionSchema = new Schema({
  userid: { 
    type: Schema.Types.ObjectId, 
    ref: 'UserInfo',
    required: true
  },

  questionid: { 
    type: Schema.Types.ObjectId, 
    ref: 'Questions',
    required: true
  },
  optionid: { 
    type: Schema.Types.ObjectId, 
    ref: 'Options',
    required: true 
  }
});

module.exports = mongoose.model('UserQuestions', UserQuestionSchema);