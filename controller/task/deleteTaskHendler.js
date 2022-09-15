const { taskDeleteById } = require("../../db/config/taskCRUD");
const crud = require("../../lib/crud");

const deleteTaskHendler = (req, res) => {
  try {
    const { id } = req.params;

    const deleteTask = taskDeleteById(id);

    if (deleteTask) {
      res.status(200).json(deleteTask);
    } else {
      res.status(404).json({ message: "task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = deleteTaskHendler;
