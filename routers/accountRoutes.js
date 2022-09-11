const accountDaitelsHendler = require("../controller/account/accountDaitelsHendler");
const accountDeleteHendler = require("../controller/account/accountDeleteHendler");
const accountUpdateHendler = require("../controller/account/accountUpdateHendler");

const router = require("express").Router();

router
  .route("/:username")
  .get(accountDaitelsHendler)
  .put(accountUpdateHendler)
  .delete(accountDeleteHendler);

module.exports = router;
