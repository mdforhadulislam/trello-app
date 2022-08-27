const { convartHash } = require("../../common");
const User = require("../../models/User");

const updateUserHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, username, email, phone, password } = req.body;

    const user = await User.findById(_id);
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

    if (name || username || email || password) {
      user.name = name ? name : user.name;
      user.username = username ? username : user.username;
      user.email = email ? email : user.email;
      user.phone = phone ? phone : user.phone;
      user.password = convartHash(password ? password : user.password);

      user.save();

      res.status(200).json(newUser);
    } else {
      res.status(403).json({ error: "There was a problem in your request" });
    }
  } catch{
    res.status(500).json({ error: "There was a server said problem" });
  }
};

module.exports = updateUserHendler;
