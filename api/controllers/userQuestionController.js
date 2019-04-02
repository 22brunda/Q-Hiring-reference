var mongoose = require('mongoose');
userQuestions  = mongoose.model('UserQuestions');
options  = mongoose.model('Options');
questions  = mongoose.model('Questions');
users = mongoose.model('UserInfo');

exports.createUserQuestion = (req, res) => {
  var questionforUsers = new userQuestions(req.body);
  var params = {
    userid: req.body.userid,
    questionid: req.body.questionid,
    optionid: req.body.optionid
  }
  questionforUsers.save()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).send({message: 'User Question does not found'});
  });
};

exports.getQuestionsUsers = (req, res) => {
  userQuestions.find({}).populate(['userid', 'questionid', "optionid"]).exec()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.send({message: 'Data not found'});
  });
};

