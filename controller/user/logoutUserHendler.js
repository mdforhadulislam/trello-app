const {
  findByTokenToGetId,
  tokenRegisterThisId,
} = require("../../db/config/tokenCRUD");
const crud = require("../../lib/crud");

const logoutUserHendler = (req, res) => {
  try {
    const { headers } = req;
    const token = headers.authorization;
    if (token) {
      const tokenCheck = findByTokenToGetId(token);
      if (tokenCheck) {
        const userAllToken = tokenRegisterThisId(tokenCheck.id);

        userAllToken.map((sToken) => {
          crud.delete("token", sToken.id);
        });
        res.status(200).json({ message: "Logout Succesfull" });
      } else {
        res.status(400).json({ message: "you are not allow" });
      }
    } else {
      res.status(400).json({ message: "Send token" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = logoutUserHendler;
