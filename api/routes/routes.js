module.exports = function(app) {
  var userRoute = require('../controllers/userController');
  var questRoute = require('../controllers/questionController');
  var optionRoute = require('../controllers/optionController');

    //Routes for Login
    app.route('/login')
    .post(userRoute.userLogin);

    //Route for signup
    app.route('/signup')
    .post(userRoute.userSignup);

    app.route('/createQuestion')
    .post(questRoute.createQuestion);

    app.route('/options')
    .post(optionRoute.createOptions);

  };