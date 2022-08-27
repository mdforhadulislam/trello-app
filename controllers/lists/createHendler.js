const Board = require("../../models/Board");
const List = require("../../models/List");

const createListHendler = async (req, res) => {
  const { board_id, name } = req.body;
  try {
    const board = await Board.findById(board_id);
    if (name && board) {
      const list = new List({
        name: name,
        board_id: board._id,
      });

      const newList = await list.save();
      if (newList) {
        board.list = [newList.id, ...board.list];
      }
      board.save();

      res.status(200).json(newList);
    } else {
      res.status(404).json({ message: "There was a problem in your request" });
    }
  } catch {
    res.status(404).json({ message: "There was a server side problem " });
  }
};

module.exports = createListHendler;
