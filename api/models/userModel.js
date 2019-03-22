var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  year_of_passing: {
    type: Number,
    required: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  batch: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('UserInfo', UserSchema);