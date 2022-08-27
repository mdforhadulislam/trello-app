const Board = require("../../models/Board");

const getBoardHendler = async (req, res) => {
  try {
    const user = req.session.user;
    const board = await Board.find({ user });

    if (board.length === 0) {
      return res.status(404).json({
        message: "No board found",
      });
    }
    return res.status(200).json(board);
  } catch{
    res.status(404).json({ message: "There was a problem in your request" });
  }
};

module.exports = getBoardHendler;
