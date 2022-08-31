const shortID = require("shortid");

class Task {
  /**
   *
   * @param {string} listID
   * @param {string} task
   * @param {boolean} done
   */
  constructor(listID, task, done) {
    this.id = shortID.generate();
    this.task = task;
    this.done = done;
    this.list_id = listID;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = Task;
