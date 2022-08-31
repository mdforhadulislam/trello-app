const router = require("express").Router();

const getBoardHendler = require("../controllers/boards/getBoardHendler");
const singleBoardHendler = require("../controllers/boards/singleBoardHendler");

const postBoardHendler = require("../controllers/boards/postBoardHendler");

const putBoardHendler = require("../controllers/boards/putBoardHendler");
const patchBoardHendler = require("../controllers/boards/patchBoardHendler");

const deleteBoardHendler = require("../controllers/boards/deleteBoardHendler");

const ListAddInBoardHendler = require("../controllers/boards/ListAddInBoardHendler");
const ListDeleteInBoardHendler = require("../controllers/boards/ListDeleteInBoardHendler");
const getListAndBoardhendler = require("../controllers/boards/getListAndBoardhendler");
const postListAndBoardhendler = require("../controllers/boards/postListAndBoardhendler");

// create a new board
router.route("/").get(getBoardHendler).post(postBoardHendler);

//  single boards get,update and delete
router
  .route("/:id")
  .get(singleBoardHendler)
  .put(putBoardHendler)
  .patch(patchBoardHendler)
  .delete(deleteBoardHendler);

// under the board add new list the call this api
router
  .route("/l/:boardId/:listId")
  .get(getListAndBoardhendler)
  .post(postListAndBoardhendler)
  .put(ListAddInBoardHendler)
  .patch(ListAddInBoardHendler)
  .delete(ListDeleteInBoardHendler);

module.exports = router;
