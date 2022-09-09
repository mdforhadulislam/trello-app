const crud = require("../../lib/crud");
const { convartHash } = require("../../utils/hash");

class TokenMethod {
  /*********************
   * Token genarator
   *********************
   * @param {string} id
   * @returns {object}object
   */
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

  /************************
   * token to token verify
   ************************
   * @param {string} token
   * @returns {object}object
   */
  findByTokenToGetId(token) {
    const allTokens = crud.read("token");
    const userId = allTokens.find((sToken) => sToken.token === token);
    return userId;
  }

  /************************
   * token to token verify
   ************************
   * @param {string} id
   * @returns {object}object
   */
  findByIdToGetToken(id) {
    const allTokens = crud.read("token");
    const token = allTokens.find((token) => token.id === id);
    return token;
  }

  /************************
   * token distroy
   ************************
   * @param {string} id
   * @returns {object} object
   */
  tokenDistroy(id) {
    const deleteToken = crud.delete("token", id);
    return deleteToken;
  }

  /**********************************
   * How many token register this id
   **********************************
   * @param {string} id
   * @returns {Array}Array
   */
  tokenRegisterThisId(id) {
    const allToken = crud.read("token");
    const tokens = allToken.filter((token) => token.id === id);
    return tokens;
  }
}

module.exports = new TokenMethod();
