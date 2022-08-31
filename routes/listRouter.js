const router = require("express").Router();


const deleteListHendler = require("../controllers/lists/deleteListHendler");
const getListHendler = require("../controllers/lists/getListHendler");

const postListHendler = require("../controllers/lists/postListHendler");

const patchListHendler = require("../controllers/lists/patchListHendler");
const putListHendler = require("../controllers/lists/putListHendler");

const taskAddInListHendler = require("../controllers/lists/taskAddInListHendler");
const taskDeleteInListHendler = require("../controllers/lists/taskDeleteInListHendler");

router.route("/").get(getListHendler).post(postListHendler);

router.put("/:id", putListHendler);
router.patch("/:id", patchListHendler);
router.delete("/:id", deleteListHendler);

router
  .put("/:id")
  .put(taskAddInListHendler)
  .patch(taskAddInListHendler)
  .delete(taskDeleteInListHendler);

module.exports = router;
