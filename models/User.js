const shortId = require("shortid");

class User {
  /***************************
   * user createion model
   ***************************
   * @param {string} name
   * @param {string} username
   * @param {string} email
   * @param {string} password
   */
  constructor(name, username, email, password) {
    this.id = shortId.generate();
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.boards = [];
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = User;
