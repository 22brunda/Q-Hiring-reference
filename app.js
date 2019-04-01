var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressValidator = require('express-validator');
jsonwebtoken = require("jsonwebtoken");

//init app
var app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressValidator());

app.use((error,req,res,next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({
    message:message
  });
})

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Users');

//created model loading here
Users = require('./api/models/userModel');
Questions = require('./api/models/questionsModel');
Options = require('./api/models/optionsModel');
UserQuestions = require('./api/models/usersQuestionsModel');

//importing route
var routes = require('./api/routes/routes');
routes(app);

//set port
app.set('port', (process.env.PORT || 3002));
app.listen(app.get('port'), function(){
  console.log(' Server started on port ' + app.get('port'));
});