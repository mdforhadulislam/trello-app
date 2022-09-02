const router = require("express").Router();

const deleteBoardHendler = require("../controllers/board/deleteBoardHendler");
const {
   getBoardHendler,
   singleGetBoardHendler,
} = require("../controllers/board/getBoardHendler");
const postBoardHendler = require("../controllers/board/postBoardHendler");
const putBoardHendler = require("../controllers/board/putBoardHendler");

router.route("/").post(postBoardHendler).get(getBoardHendler);

router
   .route("/:id")
   .get(singleGetBoardHendler)
   .delete(deleteBoardHendler)
   .put(putBoardHendler);

module.exports = router;
