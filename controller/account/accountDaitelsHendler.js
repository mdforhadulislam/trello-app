const { findByUsername } = require("../../db/config/userCRUD");

const accountDaitelsHendler = (req, res) => {
  try {
    const { username } = req.params;
    const user = findByUsername(username);
    delete user.password;
    if (user) {
      res.status(200).json({ message: user });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = accountDaitelsHendler;
