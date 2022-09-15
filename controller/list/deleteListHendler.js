const { listDeleteById } = require("../../db/config/listCRUD");

const deleteListHendler = (req, res) => {
  try {
    const { id } = req.params;

    const deleteList = listDeleteById(id);

    res.status(200).json(deleteList);
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = deleteListHendler;
