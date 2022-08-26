const Board = require("../../models/Board");
const List = require("../../models/List");

const deleteListHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const list = await List.findById(_id);
    const board = await Board.findById(list.board_id);

    if (board.user.email === req.session.user.email) {
      const deletedList = await List.findByIdAndDelete(_id);
      if (deletedList) {
        return res
          .status(200)
          .json({ message: "board Deleted", board: deletedList });
      } else {
        return res.status(404).json({ message: "No board found" });
      }
    } else {
      res
        .status(404)
        .json({ message: "you are not allow to delete this board" });
    }
  } catch (err) {
   console.log(err);
    res.status(404).json({ message: "There was a server side problem " });
  }
};

module.exports = deleteListHendler;
