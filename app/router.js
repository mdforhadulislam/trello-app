const router = require("express").Router();

router.get("/health", (req, res) => {
  res.json({
    message: "success",
  });
});

module.exports = router;
