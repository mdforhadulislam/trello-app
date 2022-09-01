const shortId = require("shortid")
class Task {
   constructor(task, done, user) {
      this.id = shortId.generate()
      this.task = task
      this.done = done
      this.user = user
      this.createAt = new Date()
      this.updateAt = new Date()
   }
}




module.exports = new Task()