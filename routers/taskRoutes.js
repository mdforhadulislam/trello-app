const router = require("express").Router();

const createTaskHendler = require("../controller/task/createTaskHendler");
const deleteTaskHendler = require("../controller/task/deleteTaskHendler");
const getListTaskHendler = require("../controller/task/getListTaskHendler");
const updateTaskHendler = require("../controller/task/updateTaskHendler");

router.route("/").post(createTaskHendler).get(getListTaskHendler);

router.route("/:id").put(updateTaskHendler).delete(deleteTaskHendler);

module.exports = router;
