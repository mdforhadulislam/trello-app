const getRegisterHendler = (req, res) => {
  try {
    res.status(200).json({ message: "hit post method" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getRegisterHendler;
