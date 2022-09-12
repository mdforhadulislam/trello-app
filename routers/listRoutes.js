const router = require("express").Router();

const createListHendler = require("../controller/list/createListHendler");
const deleteListHendler = require("../controller/list/deleteListHendler");
const getAllListHendler = require("../controller/list/getAllListHendler");
const updateListHendler = require("../controller/list/updateListHendler");

router.route("/").get(getAllListHendler).post(createListHendler);

router.route("/:id").put(updateListHendler).delete(deleteListHendler);

module.exports = router;
