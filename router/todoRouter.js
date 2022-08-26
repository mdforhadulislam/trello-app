const createTodoHendler = require("../controllers/todos/createHendler");
const deleteListHendler = require("../controllers/todos/deleteHendler");
const getTodoHendler = require("../controllers/todos/getHendler");
const updateTodoHendler = require("../controllers/todos/updateHendler");

const Router = require("express").Router();

// this router working get board
Router.get("/", getTodoHendler);

// this router working create board
Router.post("/", createTodoHendler);

// this router working update board
Router.put("/:_id", updateTodoHendler);

// this router working delete board
Router.delete("/:_id", deleteListHendler);

module.exports = Router;
