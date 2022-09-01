const shortId = require("shortid")
class List {
   constructor(name, board_id, user) {
      this.id = shortId.generate()
      this.name = name
      this.user = user
      this.board_id = board_id
      this.createAt = new Date()
      this.updateAt = new Date()
   }
}



module.exports = new List()