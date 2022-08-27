const Router = require("express").Router();
const deleteUserHendler = require("../controllers/auth/deleteUser");
const loginHendler = require("../controllers/auth/loginHendler");
const logoutHendler = require("../controllers/auth/logoutHendler");
const registerHendler = require("../controllers/auth/registerHendler");
const updateUserHendler = require("../controllers/auth/updateUser");
const { ckeckLogin } = require("../middlewares/checkLogin");

// this router working login system
Router.post("/login", loginHendler);

// this router working logout system
Router.post("/logout", ckeckLogin, logoutHendler);

// this router working register system
Router.post("/register", registerHendler);

// this is working user setting update
Router.put("/register/:_id", updateUserHendler);

// this is working user  delete
Router.delete("/register/:_id", deleteUserHendler);

module.exports = Router;
