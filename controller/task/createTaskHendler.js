const Task = require("../../models/Task");

const createTaskHendler = (req, res) => {
  try {
    let { task, done, list_Id } = req.body;
    task = task.length > 0 ? task : false;
    done = done.length > 0 ? done : false;
    list_Id = list_Id.length > 0 ? list_Id : false;

    if ((task || done) && list_Id) {
      // const newTask = new Task(task, done, list_Id);
    } else {
      res.status(500).json({ message: "send valid value" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = createTaskHendler;
