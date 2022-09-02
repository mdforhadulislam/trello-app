const router = require("express").Router();

const getAccountHendler = require("../controllers/account/getAccountHendler");

router.route("/:username").get(getAccountHendler).put().delete()

module.exports = router;
