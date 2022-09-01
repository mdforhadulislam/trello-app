const shortId = require("shortid")
class Board {
   constructor(name, collor, user) {
      this.id = shortId.generate()
      this.name = name
      this.collor = collor
      this.user = user
      this.createAt = new Date()
      this.updateAt = new Date()
   }
}

module.exports = new Board()