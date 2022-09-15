const { findByUsername, updateById } = require("../../db/config/userCRUD");
const { convartHash } = require("../../utils/hash");

const accountUpdateHendler = (req, res) => {
  try {
    const { username } = req.params;
    const user = findByUsername(username);
    if (user) {
      const name = req.body.name ?? user.name;
      const bodyUsername = req.body.username ?? user.username;
      const email = req.body.email ?? user.email;
      const password = req.body.password ?? user.password;

      const newUser = {
        ...user,
        name,
        username: bodyUsername,
        email,
        password: convartHash(password),
        updateAt: new Date(),
      };

      const updatedUser = updateById(user.id, newUser);
      res.status(200).json({ message: updatedUser });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = accountUpdateHendler;
