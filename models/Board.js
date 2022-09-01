class Board {
   constructor(name, collor, user) {
      this.name = name
      this.collor = collor
      this.user = user
      this.createAt = new Date()
      this.updateAt = new Date()
   }
}

module.exports = new Board()