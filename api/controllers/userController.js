var mongoose = require('mongoose');
UserData  = mongoose.model('UserInfo');
var bcrypt  =require('bcryptjs');
const jwt = require('jsonwebtoken');

//user signup
exports.userSignup = (req, res) => {
  var email = req.body.email;
  req.checkBody('email', 'Email is not valid').isEmail();
  var error = req.validationErrors();
  if(error){
    res.send(error);
  }else{
    UserData.find({email: req.body.email})
    .then(data => {
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
    })
  };
};

//user login
exports.userLogin = (req,res) => {
  UserData.findOne({ phonenumber : req.body.phonenumber })
  .exec()
  .then(function(user) {
    bcrypt.compare(req.body.password, user.password, function(err, result){
     if(err) {
      return res.status(401).json({
       failed: 'Unauthorized Access'
     });
    }
    if(result) {
      const JWTToken = jwt.sign({
       email: user.email,
       _id: user._id
     },
     'secret',
     {
      expiresIn: '2h'
    });
      return res.status(200).json({
       success: 'Welcome to the JWT Auth',
       token: JWTToken
     });
    }
    return res.status(401).json({
      failed: 'Unauthorized Access'
    });
  });
  })
  .catch(error => {
    res.status(500).json({
     error: error
   });
  });;
};

//getAll users
exports.getAllUsers = (req, res) =>  {
  UserData.find({})
  .then(data => {
    res.json(data);
  }).catch(err => {
    res.status(400).send('User not exists');
  });
};


