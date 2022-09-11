const {
  createBoard,
  deleteBoard,
  findAllBoard,
  boardFilterByUser,
  boardFindById,
  boardListCheckingUser,
} = require("../db/config/boardCRUD");
const { tokenCreat, findByTokenToGetId } = require("../db/config/tokenCRUD");
const userCRUD = require("../db/config/userCRUD");
const curd = require("../lib/crud");

// console.log(createBoard("ggggggggg", "ttttttttttttt", "forhadul"));
// console.log(deleteBoard("I2M-gCFeY"));
// console.log(boardFindById("68TEpN2Wo"));


console.log(boardListCheckingUser("forhad","ig7CGog0xu"));