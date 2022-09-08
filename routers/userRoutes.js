const router = require("express").Router();

const loginUserHendler = require("../controller/user/loginUserHendler");
const registerUserHendler = require("../controller/user/registerUserHendler");

router.post("/login", loginUserHendler);
router.post("/register", registerUserHendler);

module.exports = router;
