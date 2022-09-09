const router = require("express").Router();
const accountRouter = require("../routers/accountRoutes");
const userRouter = require("../routers/userRoutes");
const boardRouter = require("../routers/boardRoutes");
const listRouter = require("../routers/listRoutes");
const taskRouter = require("../routers/taskRoutes");

router.get("/health", (_req, res) => {
  res.status(200).json({
    message: "success",
  });
});

router.use("/api/v1/auth/", userRouter);
router.use("/api/v1/auth/account", accountRouter);
router.use("/api/v1/boards", boardRouter);
router.use("/api/v1/lists", listRouter);
router.use("/api/v1/tasks", taskRouter);
// router.use("/api/v1/token",)
// router.use("/api/v1/profile/upload/",)

module.exports = router;
