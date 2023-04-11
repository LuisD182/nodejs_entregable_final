const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return next({
      status: 401,
      error: "Token problem",
      message: "Not token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_CONFIG_SECRET, { algorithms: process.env.JWT_CONFIG_ALGORITHM })
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = authenticate;
