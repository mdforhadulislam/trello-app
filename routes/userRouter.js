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

router
  .route("/login")
  .get(getLoginHendler)
  .post(postLoginHendler) 
  .patch(patchLoginHendler)
  .put(putLoginHendler)
  .delete(deleteLoginHendler);

router
  .route("/register")
  .get(getRegisterHendler)
  .post(postRegisterHendler)
  .patch(patchRegisterHendler)
  .put(putRegisterHendler)
  .delete(deleteRegisterHendler);

module.exports = router;
