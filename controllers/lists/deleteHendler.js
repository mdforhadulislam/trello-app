const Board = require("../../models/Board");
const List = require("../../models/List");
const Todo = require("../../models/Todo");

const deleteListHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const list = await List.findById(_id);
    const board = await Board.findById(list.board_id);

    const todos = list.todos;

    if (board.user.email === req.session.user.email) {
      const deletedList = await List.findByIdAndDelete(_id);
      board.list = await board.list.filter((item) => item !== list._id);
      todos.filter(async (item) => {
        const deletedTodo = await Todo.findByIdAndDelete(item);
      });

      board.save();

      if (deletedList) {
        return res.status(200).json({
          message: "list Deleted and under all todos",
          list: deletedList,
        });
      } else {
        return res.status(404).json({ message: "No list found" });
      }
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
