const router = require("express").Router();

const getLoginHendler = require("../controllers/users/loginHendler/getLoginHendler");
const postLoginHendler = require("../controllers/users/loginHendler/postLoginHendler");
const patchLoginHendler = require("../controllers/users/loginHendler/patchLoginHendler");
const putLoginHendler = require("../controllers/users/loginHendler/putLoginHendler");
const deleteLoginHendler = require("../controllers/users/loginHendler/deleteLoginHendler");

const getRegisterHendler = require("../controllers/users/registerHendler/getRegisterHendler");
const postRegisterHendler = require("../controllers/users/registerHendler/postRegisterHendler");
const patchRegisterHendler = require("../controllers/users/registerHendler/patchRegisterHendler");
const putRegisterHendler = require("../controllers/users/registerHendler/putRegisterHendler");
const deleteRegisterHendler = require("../controllers/users/registerHendler/deleteRegisterHendler");

const getAccountHendler = require("../controllers/users/accountsHendler/getAccountHendler");
const postAccountHendler = require("../controllers/users/accountsHendler/postAccountHendler");
const patchAccountHendler = require("../controllers/users/accountsHendler/patchAccountHendler");
const putAccountHendler = require("../controllers/users/accountsHendler/putAccountHendler");
const deleteAccountHendler = require("../controllers/users/accountsHendler/deleteAccountHendler");

// this is login api routes
router
  .route("/login")
  .get(getLoginHendler)
  .post(postLoginHendler)
  .patch(patchLoginHendler)
  .put(putLoginHendler)
  .delete(deleteLoginHendler);

//   this is registation api routes
router.post("/register", postRegisterHendler);
router
  .route("/register/:username")
  .get(getRegisterHendler)
  .patch(patchRegisterHendler)
  .put(putRegisterHendler)
  .delete(deleteRegisterHendler);

//   this is accounts api routes
router.post("/accounts", postAccountHendler);
router
  .route("/accounts/:username")
  .get(getAccountHendler)
  .patch(patchAccountHendler)
  .put(putAccountHendler)
  .delete(deleteAccountHendler);

module.exports = router;
