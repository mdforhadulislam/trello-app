const curd = require("../../lib/curdOparations");
const utilites = require("../../utils/utilites");

const userImageUploadHendler = (req, res) => {
  try {
    let {
      files: { profile },
    } = req;
    let { username } = req?.params;

    utilites.fileUploader(
      username,
      profile,
      /**
       *
       * @param {boolean} err
       * @param {string} apiUrl
       * @param {string} message
       * @returns {object}object
       */
      (err, apiUrl, message) => {
        // check user upload true or false the go to next
        if (err) {
          curd.read("user", (err, data) => {
            if (err) {
              const finduser = utilites.find(data, "username", username);
              if (finduser) {
                const updateUser = {
                  ...finduser,
                  profileImage: apiUrl ? apiUrl : null,
                };
                curd.update("user", finduser.id, updateUser, (err, data) => {
                  res.status(500).json(data);
                });
              } else {
                res.status(500).json({ message: "user not found" });
              }
            } else {
              res.status(500).json({ message: "Internal Server Error" });
            }
          });
        } else {
          res.status(200).json({ message: message });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = userImageUploadHendler;
