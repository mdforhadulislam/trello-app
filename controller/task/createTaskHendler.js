const { listFindById } = require("../../db/config/listCRUD");
const { taskCreate } = require("../../db/config/taskCRUD");
const crud = require("../../lib/crud");

const createTaskHendler = (req, res) => {
  try {
    let { task, done, list_id: list_Id } = req.body;
    task = task.length > 0 ? task : false;
    done = done ? true : false;
    list_Id = list_Id.length > 0 ? list_Id : false;

    if (task && list_Id) {
      const findList = listFindById(list_Id);
      if (findList) {
        const newTask = taskCreate(task, done, list_Id);
        res.status(200).json(newTask);
      } else {
        res.status(404).json({ message: "list not found" });
      }
    } else {
      res.status(400).json({ message: "send valid value" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = createTaskHendler;
