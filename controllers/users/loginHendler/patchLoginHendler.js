const patchLoginHendler = (req, res) => {
  res.status(200).json({ message: "hit post method" });
};

module.exports = patchLoginHendler;
