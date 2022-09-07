const shortId = require("shortid");

class List {
  constructor(name, color, board_id) {
    this.id = shortId.generate();
    this.name = name;
    this.color = color;
    this.board_id = board_id;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = List;
