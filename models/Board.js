const shortID = require("shortid");

class Board {
  constructor(user, name, color, list) {
    this.id = shortID.generate();
    this.name = name;
    this.user = user;
    this.color = color;
    this.list = list;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = Board;
