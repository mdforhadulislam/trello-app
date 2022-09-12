const {
  tokenCreat,
  tokenRegisterThisId,
} = require("../../db/config/tokenCRUD");
const { findByEmail } = require("../../db/config/userCRUD");
const { compareHash } = require("../../utils/hash");

const loginUserHendler = (req, res) => {
  try {
    let email = req.body.email ?? false;
    let password = req.body.password ?? false;
    if (email && password) {
      const user = findByEmail(email);
      if (user && compareHash(password, user.password)) {
        const userAnotherToken = tokenRegisterThisId(user.id);
        if (userAnotherToken.length < 3) {
          const token = tokenCreat(user.id);
          res
            .status(200)
            .json({ message: "Login Success", token: token.token });
        } else {
          res
            .status(400)
            .json({ message: "you are alrady login another device" });
        }
      } else {
        res.status(400).json({ message: "you are not allow" });
      }
      if (user) {
      } else {
        res.status(404).json({ message: "you have no account" });
      }
    } else {
      res.status(400).json({ message: "send valid value" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = loginUserHendler;
