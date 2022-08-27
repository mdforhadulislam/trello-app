const Board = require("../../models/Board");
const User = require("../../models/User");

const deleteUserHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);
    console.log(user);
    const board = await Board.findOne({ username: user.username, email: user.email });
    console.log(board);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "There was a server side problem " });
  }
};

module.exports = deleteUserHendler;
