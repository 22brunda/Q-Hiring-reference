var mongoose = require('mongoose');
questions  = mongoose.model('Questions');
options  = mongoose.model('Options');

exports.createQuestion = function(req, res){
	var questionData = new questions(req.body);
	questionData.options.push(req.body.opt1, req.body.opt2, req.body.opt3, req.body.opt4)
	questionData.save(function(err, data){
            if(err)
              res.send(err.message);
            res.json(data);
          })
};