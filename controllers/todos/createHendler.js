const List = require("../../models/List");
const Todo = require("../../models/Todo");

const createTodoHendler = async (req, res) => {
  const { list_id, task, done } = req.body;
  try {
    const list = await List.findById(list_id);
    if (task && list) {
      const todo = new Todo({ task, done, list_id: list._id });

      const newTodo = await todo.save();
      if (newTodo) {
        list.todos = [newTodo.id, ...list.todos];
      }
      list.save();

      res.status(200).json(newTodo);
    } else {
      res.status(404).json({ message: "There was a problem in your request" });
    }
  } catch (error) {
    console.log(err);
    res.status(404).json({ message: "There was a server side problem " });
  }
};

module.exports = createTodoHendler;
