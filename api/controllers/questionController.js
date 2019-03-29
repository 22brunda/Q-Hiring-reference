var mongoose = require('mongoose');
questions  = mongoose.model('Questions');
options  = mongoose.model('Options');
const jwt = require('jsonwebtoken');

exports.createQuestion = (req, res) => {
  var questionData = new questions(req.body);
  questionData.save()
  .then(data => {
    res.json(data);
  }).catch(err => {
    res.status(400).send({message: err.message});
  });
};

exports.getAllwithOptions = (req, res, next) => {
  questions.aggregate([{
    $lookup: {
      from: "options",
      localField: "_id",
      foreignField: 'questions',
      as: "options"
    }
  }])
  .then(result => {
    res.status(200).json({
      message: 'all questions and there options',
      result: result
    })
  })
  .catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  })
}