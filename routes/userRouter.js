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

router.get("/login", getLoginHendler);
router.post("/login", postLoginHendler);
router.patch("/login", patchLoginHendler);
router.put("/login", putLoginHendler);
router.delete("/login", deleteLoginHendler);

router.get("/register/:username", getRegisterHendler);
router.post("/register", postRegisterHendler);
router.patch("/register/:username", patchRegisterHendler);
router.put("/register/:username", putRegisterHendler);
router.delete("/register/:username", deleteRegisterHendler);

module.exports = router;
