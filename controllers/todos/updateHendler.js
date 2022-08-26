const Board = require("../../models/Board");
const List = require("../../models/List");
const Todo = require("../../models/Todo");

const updateTodoHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const todo = await Todo.findById(_id);
    const list = await List.findById(todo.list_id);
    const board = await Board.findById(list.board_id);

    if (board.user.email === req.session.user.email) {
      todo.task = req.body.task;
      todo.done = req.body.done;

      const updateList = await list.save();
      res.status(200).json(updateList);
    } else {
      res.status(404).json({ message: "You are not update this board" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "There was a server side problem " });
  }
};

module.exports = updateTodoHendler;
