const express = require("express");
const router = express.Router();
const userRoutes = require("../routes/userRoutes");
const boardRoutes = require("../routes/boardRoutes");
const listRoutes = require("../routes/listRoutes");
const taskRoutes = require("../routes/taskRoutes");
const accountRoutes = require("../routes/accountRoutes");
const checkAuthentication = require("../middlewares/checkAuthentication");

router.use("/api/v1/auth", userRoutes);
router.use("/api/v1/accounts", checkAuthentication, accountRoutes);
router.use("/api/v1/boards", boardRoutes);
router.use("/api/v1/lists", listRoutes);
router.use("/api/v1/tasks", taskRoutes);

router.use("/api/v1/media", checkAuthentication, express.static("media"))

router.get("/health", (_req, res) => {
   res.status(200).json({ message: "success" });
});

router.get("/", (_req, res) => {
   res.status(200).json({ message: "success" });
});

module.exports = router;
