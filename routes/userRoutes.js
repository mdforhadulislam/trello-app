const router = require("express").Router()

const userRagisterHendler = require("../controllers/user/userRagisterHendler")

router.post("/register", userRagisterHendler)


module.exports = router