const shortId = require("shortid");

class Task {
  /**********************
   * task creation models
   **********************
   * @param {string} task
   * @param {string} done
   * @param {string} list_id
   */
  constructor(task, done, list_id) {
    this.id = shortId.generate();
    this.task = task;
    this.done = done ? true : false;
    this.list_id = list_id;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = Task;
