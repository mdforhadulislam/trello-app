const shortId = require("shortid")
class Task {
   constructor(task, done, list_id) {
      this.id = shortId.generate()
      this.task = task
      this.done = done
      this.list_id = list_id
      this.createAt = new Date()
      this.updateAt = new Date()
   }
}




module.exports = Task