const router = require("express").Router()
const userLoginHendler = require("../controllers/user/userLoginHendler")
const userLogoutHendler = require("../controllers/user/userLogoutHendler")
const userRagisterHendler = require("../controllers/user/userRagisterHendler")
const checkAuthentication = require("../middlewares/checkAuthentication")

router.post("/register", userRagisterHendler)
router.post("/login", userLoginHendler)
router.post("/logout", checkAuthentication, userLogoutHendler)

module.exports = router