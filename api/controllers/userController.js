var mongoose = require('mongoose');
UserData  = mongoose.model('UserInfo');
var bcrypt  =require('bcryptjs');

//user signup
exports.userSignup = function(req, res){
  UserData.find({email: req.body.email},function(err, data){
    if(data != null && data != ''){
      res.send('User already exists');
    }
    else
    {
      var userData = new UserData(req.body);
      bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(userData.password, salt, function(err, hash) {
          userData.password = hash;
          userData.save(function(err, data){
            if(err)
              res.send(err.message);
            res.json(data);
          })
        })
      })
    }
  });
};

//user login
exports.userLogin = function(req,res){
  UserData.find({ phonenumber: req.body.phonenumber}, function(err, data){
    if(data != null && data != ''){
      bcrypt.compare(req.body.password, data[0].password, function(err, isMatch){
        if(isMatch == true){
          res.status(200).send("User logged in");
        }else{
          res.send("Password do not match");
        }
      });
    } else{
      res.send("User does not exist");
    }
  });
};

//getAll users
exports.getAllUsers = function(req, res) {
  UserData.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
    console.log(data);
  });
};
