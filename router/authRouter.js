const Router = require("express").Router();
const loginHendler = require("../controllers/auth/loginHendler");
const logoutHendler = require("../controllers/auth/logoutHendler");
const registerHendler = require("../controllers/auth/registerHendler");
const { ckeckLogin } = require("../middlewares/checkLogin");

// this router working login system
Router.post("/login", loginHendler);

// this router working logout system
Router.post("/logout",ckeckLogin, logoutHendler);

// this router working register system
Router.post("/register", registerHendler);

module.exports = Router;
