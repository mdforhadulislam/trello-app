const postLogoutHendler = (req, res) => {
  try {
    console.log(req.session.user);
    if (req.session.user) {
      req.session.user = false;
      res.status(200).json({ message: "logout successfull" });
    } else {
      res.status(400).json({ message: "you are not allowed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = postLogoutHendler;
