const Board = require("../../models/Board");

const singleBoardHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const board = await Board.findById(_id);
    if (board) {
      return res.status(200).json(board);
    } else {
      return res.status(404).json({ message: "Not Found" });
    }
  } catch{
    res.status(404).json({ message: "There was a problem in your request" });
  }
};

module.exports = singleBoardHendler;
