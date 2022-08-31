const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const authentication = (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      const userToken = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(userToken, jwtSecret).trim();
      if ((req.session.user === user)) {
        next();
      } else {
        res.status(401).json({ message: "Authentication Failed" });
      }
    } else {
      res.status(401).json({ message: "Authentication Failed" });
    }
  } catch (error) {
    res.status(401).json({ message: "Authentication Failed" });
  }
};

module.exports = authentication;
