exports.loginRequired = (req, res, next) =>  {
  if (req.headers.authorization != undefined) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};