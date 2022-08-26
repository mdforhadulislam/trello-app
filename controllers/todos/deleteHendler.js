const Board = require("../../models/Board");
const List = require("../../models/List");
const Todo = require("../../models/Todo");

const deleteListHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const todo = await Todo.findById(_id);
    const list = await List.findById(todo.list_id);
    const board = await Board.findById(list.board_id);

    if (board.user.email === req.session.user.email) {
       const deletedTodo = await Todo.findByIdAndDelete(_id);
       list.todos = await list.todos.filter((item) => item !== _id);

      list.save();

      if (deletedTodo) {
        return res
          .status(200)
          .json({ message: "todo Deleted", todo: deletedTodo });
      } else {
        return res.status(404).json({ message: "No todo found" });
      }
    } else {
      res
        .status(404)
        .json({ message: "you are not allow to delete this todo" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "There was a server side problem " });
  }
};

module.exports = deleteListHendler;
