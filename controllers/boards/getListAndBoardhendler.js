const getListAndBoardhendler = (_req, res) => {
  try {
    res.status(200).json({ message: "hit put and delete" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = getListAndBoardhendler;
