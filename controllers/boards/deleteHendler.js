const Board = require("../../models/Board");
const List = require("../../models/List");

const deleteBoardHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const board = await Board.findById(_id);
    const list = board.list;

    if (board.user.email === req.session.user.email) {
      const deletedlist = [];

      list.filter(async (item) => {
        const deleteList = await List.findByIdAndDelete(item);
        deletedlist.push(deleteList);
      });

      const deletedBoard = await Board.findByIdAndDelete(_id);

      if (deletedBoard) {
        return res
          .status(200)
          .json({
            message: "board Deleted",
            board: deletedBoard,
            list: deletedlist,
          });
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

module.exports = deleteBoardHendler;
