module.exports = function(app) {
  var userRoute = require('../controllers/userController');

    //Routes for Login
    app.route('/login')
    .post(userRoute.userLogin);

    //Route for signup
    app.route('/signup')
    .post(userRoute.userSignup);

  };