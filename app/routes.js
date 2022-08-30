const router = require("express").Router();

router.get("/health", (_req, res) => {
  res.send({ message: "Success" });
});



module.exports = router;
