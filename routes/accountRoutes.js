const router = require("express").Router();

const deleteAccountHendler = require("../controllers/account/deleteAccountHendler");
const getAccountHendler = require("../controllers/account/getAccountHendler");
const putAccountHendler = require("../controllers/account/putAccountHendler");

router
   .route("/:username")
   .get(getAccountHendler)
   .put(putAccountHendler)
   .delete(deleteAccountHendler);

module.exports = router;
