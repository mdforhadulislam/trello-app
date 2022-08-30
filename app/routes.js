const router = require("express").Router();
const userRoutes = require("../routes/userRouter");

router.use("/auth", userRoutes);

module.exports = router;
