const router = require("express").Router()

const deleteListHenlder = require("../controllers/list/deleteListHenlder")
const getListHendler = require("../controllers/list/getListHendler")
const postListHendler = require("../controllers/list/postListHendler")
const putListHendler = require("../controllers/list/putListHendler")

router.route("/").post(postListHendler).get(getListHendler)

router.put("/:id", putListHendler)
router.delete("/:id", deleteListHenlder)

module.exports = router