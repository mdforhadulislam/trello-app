const logoutHendler = (req, res) => {
  try {
    req.session.user = false;
    res.status(200).json({ error: "Successfully Logout" });
  } catch {
    res.status(200).json({ error: "there was a problem in server said" });
  }
};

module.exports = logoutHendler;
