var mongoose = require('mongoose');
questions  = mongoose.model('Questions');

exports.createQuestion = function(req, res){
	var questionData = new questions(req.body);
	questionData.save(function(err, data){
            if(err)
              res.send(err.message);
            res.json(data);
          })
};