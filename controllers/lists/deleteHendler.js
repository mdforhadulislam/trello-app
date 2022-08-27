const Board = require("../../models/Board");
const List = require("../../models/List");
const Todo = require("../../models/Todo");

const deleteListHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const list = await List.findById(_id);
    const board = await Board.findById(list.board_id);

    if (board.user.email === req.session.user.email) {
      List.findByIdAndDelete(_id).then((res1) => {
        if (res1) {
          board.list = board.list.filter((item) => item !== list._id);
          list.todos.filter((item) => {
            Todo.findByIdAndDelete(item).then((res) => {
              if (res) {
                board.save();
                return res.status(200).json({
                  message: "list Deleted and under all todos",
                  list: res1,
                });
              } else {
                return res.status(404).json({ message: "No list found" });
              }
            });
          });
        }
      });
    } else {
      res
        .status(404)
        .json({ message: "you are not allow to delete this list" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "There was a server side problem " });
  }
};

module.exports = deleteListHendler;
