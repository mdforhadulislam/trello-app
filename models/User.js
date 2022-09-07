const shortId = require("shortid");

class User {
  constructor(name, username, email, password) {
    this.id = shortId.generate();
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = User
