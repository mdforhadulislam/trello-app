const { convartHash } = require("../../common");
const User = require("../../models/User");

const registerHendler = async (req, res) => {
  try {
    const { name, username, email, phone, password } = req.body;
    const emailToFindUser = await User.findOne({ email });
    const userNameToFindUser = await User.findOne({ username });

    if (emailToFindUser || userNameToFindUser) {
      return res.status(403).json({
        error: `This ${
          emailToFindUser && userNameToFindUser
            ? "email and username"
            : emailToFindUser
            ? "email"
            : userNameToFindUser
            ? "username"
            : false
        } alrady used`,
      });
    }

    if (name && username && email && password) {
      const user = new User({
        name: name,
        username: username,
        email: email,
        phone: phone,
        password: convartHash(password),
      });
      const newUser = await user.save();

      res.status(200).json(newUser);
    } else {
      res.status(403).json({ error: "There was a problem in your request" });
    }
  } catch{
    res.status(500).json({ error: "There was a server said problem" });
  }
};

module.exports = registerHendler;
