const Router = require("express").Router();
const createBoardHendler = require("../controllers/board/createHendler");
const deleteBoardHendler = require("../controllers/board/deleteHendler");
const getBoardHendler = require("../controllers/board/getHendler");
const singleBoardHendler = require("../controllers/board/singleHendler");
const updateBoardHendler = require("../controllers/board/updateHendler");
const { ckeckLogin } = require("../middlewares/checkLogin");

// this router working single board
Router.get("/:_id", singleBoardHendler);

// this router working get board
Router.get("/", getBoardHendler);

// this router working create board
Router.post("/", createBoardHendler);

// this router working update board
Router.put("/:_id", updateBoardHendler);

// this router working delete board
Router.delete("/:_id", deleteBoardHendler);

module.exports = Router;
