const crud = require("../../lib/crud");
const { convartHash } = require("../../utils/hash");

class TokenMethod {
  constructor() {}
  tokenCreat(id) {
    let length = 60;
    if (length) {
      const possiblecharacters = "abcdefghijklmnopqrstuvwxyz1234567890";
      let output = "";
      for (let i = 1; i <= length; i += 1) {
        const randomCharacter = possiblecharacters.charAt(
          Math.floor(Math.random() * possiblecharacters.length)
        );
        output += randomCharacter;
      }
      const token = { id: id, token: output };

      return crud.create("token", token);
    }
    return false;
  }
  findByTokenToGetId() {}
  findByIdToGetToken() {}
  tokenVarify() {}
  tokenDistroy() {}
}

module.exports = new TokenMethod();
