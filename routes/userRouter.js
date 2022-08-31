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

const authentication = require("../middlewares/authentication");
const postLogoutHendler = require("../controllers/users/logoutHendler/postLogoutHendler");

// this is login api routes
router
  .route("/login")
  .get(getLoginHendler)
  .post(postLoginHendler)
  .patch(patchLoginHendler)
  .put(putLoginHendler)
  .delete(deleteLoginHendler);

  //this is logout api routes
router.route("/logout").post(authentication, postLogoutHendler);

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
  .get(authentication, getAccountHendler)
  .patch(authentication, patchAccountHendler)
  .put(authentication, putAccountHendler)
  .delete(authentication, deleteAccountHendler);

module.exports = router;
