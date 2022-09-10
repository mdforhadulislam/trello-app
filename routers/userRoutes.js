const router = require("express").Router();

const loginUserHendler = require("../controller/user/loginUserHendler");
const registerUserHendler = require("../controller/user/registerUserHendler");
const accountDaitelsHendler = require("../controller/account/accountDaitelsHendler");
const accountDeleteHendler = require("../controller/account/accountDeleteHendler");
const accountUpdateHendler = require("../controller/account/accountUpdateHendler");
const logoutUserHendler = require("../controller/user/logoutUserhendler");

const checkLogin = require("../middlewares/checkLogin");

router.post("/login", loginUserHendler);
router.post("/register", registerUserHendler);
router.post("/logout", checkLogin, logoutUserHendler);

router
  .route("/account/:username")
  .get(accountDaitelsHendler)
  .put(accountUpdateHendler)
  .delete(accountDeleteHendler);

module.exports = router;
