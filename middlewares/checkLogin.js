const jwt = require("jsonwebtoken");

const ckeckLogin = (req, res, next) => {
  try {
    const { headers } = req;
    const token = headers.authorization;
    const { username, email } = jwt.verify(token, process.env.JWT_SECRET);
    if (
      username === req.session.user.username &&
      email === req.session.user.email
    ) {
      next();
    } else {
      res.status(500).send({ error: "Authontications Faild" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "there was a problem in server saide" });
  }
};

module.exports = {
  ckeckLogin,
};
