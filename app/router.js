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
    userLogin: "/api/v1/auth/login",
    userLogout: "/api/v1/auth/logout",
    userRegister: "/api/v1/auth/register",
    accountsGet: "/api/v1/accounts/:username",
    accountsPut: "/api/v1/accounts/:username",
    accountsDelete: "/api/v1/accounts/:username",
    boardGetAll: "/api/v1/boards/",
    boardPost: "/api/v1/boards/",
    boardGetSingle: "/api/v1/boards/:id",
    boardPut: "/api/v1/boards/:id",
    boardDelete: "/api/v1/boards/:id",
    listGetAll: "/api/v1/lists/?bi=send board id",
    listPost: "/api/v1/lists/",
    listPut: "/api/v1/lists/:id",
    listDelete: "/api/v1/lists/:id",
    taskGetAll: "/api/v1/tasks/?bi=send list id",
    taskPost: "/api/v1/tasks/",
    taskPut: "/api/v1/tasks/:id",
    taskDelete: "/api/v1/tasks/:id",
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
