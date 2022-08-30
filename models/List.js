const shortID = require("shortid");

class List {
  constructor(boardID, name, todo) {
    this.id = shortID.generate();
    this.name = name;
    this.todo = todo;
    this.board_id = boardID;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = List;
