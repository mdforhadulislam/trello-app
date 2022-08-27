const Board = require("../../models/Board");
const List = require("../../models/List");

const getListHendler = async (req, res) => {
  try {
    const { board_id } = req.body;
    const board = await Board.findById(board_id);
    if (board.list.length === 0) {
      return res.status(404).json({
        message: "No List found under the Board",
      });
    }

    const allList = await List.find({ board_id });

    res.status(200).send(allList);

  } catch{
    res.status(404).json({ message: "There was a problem in your request" });
  }
};

module.exports = getListHendler;
