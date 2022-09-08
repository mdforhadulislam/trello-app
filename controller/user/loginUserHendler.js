const { findByEmail } = require("../../db/config/userCRUD");
const { compareHash } = require("../../utils/hash");

const loginUserHendler = (req, res) => {
  try {
    let email = req.body.email ?? false;
    let password = req.body.password ?? false;
    if (email && password) {
      const user = findByEmail(email);
      if (user && compareHash(password, user.password)) {
         
      } else {
        res.status(400).json({ message: "you are not allow" });
      }
      if (user) {
      } else {
        res.status(500).json({ message: "you have no account" });
      }
    } else {
      res.status(500).json({ message: "send valid value" });
    }
  } catch (error) {
    console.table(error);
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = loginUserHendler;
