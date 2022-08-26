const List = require("../../models/List");
const Todo = require("../../models/Todo");

const getTodoHendler = async (req, res) => {
   
  try {
   const { list_id } = req.body;
   const list = await List.findById(list_id);
   if (list.todos.length === 0) {
     return res.status(404).json({
       message: "No List found under the Todo",
     });
   }

   const allTodo = await Todo.find({ list_id });

   res.status(200).send(allTodo);

   //  return res.status(200).json(list);
 } catch (err) {
  console.log(err);
   res.status(404).json({ message: "There was a problem in your request" });
 }

};

module.exports = getTodoHendler;
