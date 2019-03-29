module.exports = function(app) {
  var userRoute = require('../controllers/userController');
  var questRoute = require('../controllers/questionController');
  var optionRoute = require('../controllers/optionController');
  var auth = require('../middleware/auth')

    //Routes for Login
    app.route('/login')
    .post(userRoute.userLogin);

    //Route for Signup
    app.route('/signup')
    .post(userRoute.userSignup);

    //Route for GetAllUsers
    app.route('/getAllUsers')
    .get(userRoute.getAllUsers);

    //Route for CreateQuestion
    app.route('/createQuestion')
    .post(auth.loginRequired, questRoute.createQuestion);

    //Route for CreateOptions
    app.route('/options')
    .post(auth.loginRequired, optionRoute.createOptions);

    //Route for GetAll Options with question
    app.route('/getAllwithOptions')
    .get(auth.loginRequired, questRoute.getAllwithOptions);
  };