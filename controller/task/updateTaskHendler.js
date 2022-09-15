const { taskUpdateById } = require("../../db/config/taskCRUD");

const updateTaskHendler = (req, res) => {
  try {
    const { id } = req.params;
    let { task, done } = req.body;

    const updateTask = taskUpdateById(id, task, done);

    if (updateTask) {
      res.status(500).json(newTask);
    } else {
      res.status(500).json({ message: "task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = updateTaskHendler;
