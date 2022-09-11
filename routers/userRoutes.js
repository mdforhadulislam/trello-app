const router = require("express").Router();

const loginUserHendler = require("../controller/user/loginUserHendler");
const registerUserHendler = require("../controller/user/registerUserHendler");
const logoutUserHendler = require("../controller/user/logoutUserhendler");

const checkLogin = require("../middlewares/checkLogin");

router.post("/login", loginUserHendler);
router.post("/register", registerUserHendler);
router.post("/logout", checkLogin, logoutUserHendler);

module.exports = router;
