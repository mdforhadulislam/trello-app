const createListHendler = require("../controllers/lists/createHendler");
const deleteListHendler = require("../controllers/lists/getHendler");
const updateListHendler = require("../controllers/lists/updateHendler");
const getListHendler = require("../controllers/lists/getHendler");

const Router = require("express").Router();

// this router working get board
Router.get("/", getListHendler);

// this router working create board
Router.post("/", createListHendler);

// this router working update board
Router.put("/:_id", updateListHendler);

// this router working delete board
Router.delete("/:_id", deleteListHendler);

module.exports = Router;
