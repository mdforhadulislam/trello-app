const router = require("express").Router();

const createBoardHendler = require("../controller/board/createBoardHendler");
const deleteBoardHendler = require("../controller/board/deleteBoardHendler");
const getAllBoardHendler = require("../controller/board/getAllBoardHendler");
const singleBoardGetHendler = require("../controller/board/singleBoardGetHendler");
const updateBoardHendler = require("../controller/board/updateBoardHendler");

router.route("/").post(createBoardHendler).get(getAllBoardHendler);

router
  .route("/:id")
  .get(singleBoardGetHendler)
  .put(updateBoardHendler)
  .delete(deleteBoardHendler);

module.exports = router;
