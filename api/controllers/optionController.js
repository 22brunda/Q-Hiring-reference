var mongoose = require('mongoose');
options  = mongoose.model('Options');
questionsInfo = mongoose.model('Questions');

exports.createOptions = function(req, res){
	console.log('hii');
	// var optionInfo = new options(req.body);
	// optionInfo.save(function(err, data){
 //            if(err)
 //              res.send(err.message);
 //            res.json(data);
 //          })
};