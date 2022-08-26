const Router = require("express").Router();
const createBoardHendler = require("../controllers/boards/createHendler");
const deleteBoardHendler = require("../controllers/boards/deleteHendler");
const getBoardHendler = require("../controllers/boards/getHendler");
const singleBoardHendler = require("../controllers/boards/singleHendler");
const updateBoardHendler = require("../controllers/boards/updateHendler");
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
