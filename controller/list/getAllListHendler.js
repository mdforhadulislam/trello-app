const { listFilterByBoardId } = require("../../db/config/listCRUD");

const getAllListHendler = (req, res) => {
  try {
    const { bi } = req.query;

    if (bi) {
      const filteringList = listFilterByBoardId(bi);

      res.status(200).json(filteringList);
    } else {
      res.status(400).json({ message: "requested query paramiters not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = getAllListHendler;
