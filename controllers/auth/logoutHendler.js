const logoutHendler = (req, res) => {
  try {
    req.session.user = false;
    res.status(200).json({ error: "Successfully Logout" });
  } catch (err) {
    console.log(err);
    res.status(200).json({ error: "there was a problem in server said" });
  }
};

module.exports = logoutHendler;
