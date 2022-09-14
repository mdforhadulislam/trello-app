const crud = require("../../lib/crud");
const Task = require("../../models/Task");

class TaskMethod {
  constructor() {}

  /**********************
   * crated task
   **********************
   * @param {string} task
   * @param {boolean} done
   * @param {string} list_id
   * @returns {object} crated task
   */
  taskCreate(task, done, list_id) {
    const newTask = new Task(task, done, list_id);
    const createTask = crud.create("task", newTask);
    return createTask;
  }

  /*********************
   * task find by id
   *********************
   * @param {string} id
   * @returns {object} finded task
   */
  taskFindById(id) {
    const allTask = crud.read("task");
    const findTask = allTask.find((task) => task.id === id);
    return findTask;
  }

  /**********************
   * task updated
   *********************
   * @param {string} id
   * @param {string} task
   * @param {boolean} done
   * @returns {object} updated task
   */
  taskUpdateById(id, task, done) {
    const findTask = crud.read("task").filter((task) => task.id === id);
    if (findTask) {
      const newTask = {
        ...findTask,
        task: task ? task : findTask.task,
        done: done ? done : findTask.done,
        updateAt: new Date(),
      };
      const updateTask = crud.update("task", id, newTask);

      return updateTask;
    }
    return false;
  }

  /**********************
   * deleted task
   *********************
   * @param {string} id
   * @returns {object} deleted task
   */
  taskDeleteById(id) {
    const deleteTask = crud.delete("task", id);
    return deleteTask;
  }

  /**************************
   * list to filtering task
   *************************
   * @param {string} list_id
   * @returns {Array} task array
   */
  taskGetByListId(list_id) {
    const allTask = crud.read("task");
    const listedTask = allTask.filter((task) => task.list_id === list_id);
    return listedTask;
  }
}

module.exports = new TaskMethod();
