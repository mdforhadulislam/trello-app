const router = require("express").Router()

const deleteTaskHendler = require("../controllers/task/deleteTaskHendler")
const getTaskHendler = require("../controllers/task/getTaskHendler")
const postTaskHendler = require("../controllers/task/postTaskHendler")
const putTaskHendler = require("../controllers/task/putTaskHendler")

router.route("/").post(postTaskHendler).get(getTaskHendler)

router.put("/:id", putTaskHendler)
router.delete("/:id", deleteTaskHendler)

module.exports = router