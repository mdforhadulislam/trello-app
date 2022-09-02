const express = require("express");
const router = express.Router();
const userRoutes = require("../routes/userRoutes");
const boardRoutes = require("../routes/boardRoutes");
const listRoutes = require("../routes/listRoutes");
const taskRoutes = require("../routes/taskRoutes");
const accountRoutes = require("../routes/accountRoutes");
const checkAuthentication = require("../middlewares/checkAuthentication");

router.get("/api/v1/", (_req, res) => {
  res.status(200).json({
    userLogin: "auth/login",
    userLogout: "auth/logout",
    userRegister: "auth/register",
    accountsGet: "accounts/:username",
    accountsPut: "accounts/:username",
    accountsDelete: "accounts/:username",
    boardGetAll: "boards/",
    boardPost: "boards/",
    boardGetSingle: "boards/:id",
    boardPut: "boards/:id",
    boardDelete: "boards/:id",
    listGetAll: "lists/?bi=send board id",
    listPost: "lists/",
    listPut: "lists/:id",
    listDelete: "lists/:id",
    taskGetAll: "tasks/?bi=send list id",
    taskPost: "tasks/",
    taskPut: "tasks/:id",
    taskDelete: "tasks/:id",
  });
});

router.use("/api/v1/auth", userRoutes);
router.use("/api/v1/accounts", checkAuthentication, accountRoutes);
router.use("/api/v1/boards", checkAuthentication, boardRoutes);
router.use("/api/v1/lists", checkAuthentication, listRoutes);
router.use("/api/v1/tasks", checkAuthentication, taskRoutes);

router.use("/api/v1/media", checkAuthentication, express.static("media"));

router.get("/health", (_req, res) => {
  res.status(200).json({ message: "success" });
});

router.get("/", (_req, res) => {
  res.status(200).json({ message: "success" });
});

module.exports = router;
