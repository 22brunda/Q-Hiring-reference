var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//init app
var app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Users');

//created model loading here
Users = require('./api/models/userModel');

//importing route
var routes = require('./api/routes/routes');
routes(app);

//set port
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
  console.log(' Server started on port ' + app.get('port'));
});

