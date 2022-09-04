const { tokenToGetUser } = require("../../utils/tokensMethord");

const tokenToGetUserDeatils = (req, res) => {
  try {
    tokenToGetUser(req, (err, user) => {
      if (err) {
        res.status(200).json(user);
      } else {
        res.status(500).json({ message: "Token is Unusedable" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = tokenToGetUserDeatils;
