var mongoose = require('mongoose');
options  = mongoose.model('Options');
questions = mongoose.model('Questions');
const jwt = require('jsonwebtoken');

exports.createOptions = (req, res) => {
  var optionInfo = new options(req.body);
  optionInfo.save()
  .then(data => {
    res.json(data);
  }).catch(err => {
    res.status(400).send({message : 'No options found'});
  });
};
