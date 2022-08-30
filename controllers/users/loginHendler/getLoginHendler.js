const getLoginHendler = (req, res) => {
  res.status(200).json({ message: "hit post method" });
};

module.exports = getLoginHendler;
