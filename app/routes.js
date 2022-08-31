const router = require("express").Router();
const userRoutes = require("../routes/userRouter");
const boardRoutes = require("../routes/boardRouter");
const listRoutes = require("../routes/listRouter");
const taskRoutes = require("../routes/taskRouter");

router.get("/", (req, res) => {
  res.status(200).json({
    health: "/health",
    login: "/api/v1/auth/login",
    logout: "/api/v1/auth/logout",
    register: "/api/v1/auth/register",
    accounts: "/api/v1/auth/accounts",
    board: "/api/v1/board",
    list: "/api/v1/list",
    task: "/api/v1/task",
  });
});

router.use("/auth", userRoutes);
router.use("/board", boardRoutes);
router.use("/list", listRoutes);
router.use("/task", taskRoutes);

module.exports = router;
