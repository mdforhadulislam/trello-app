const curd = require("../../lib/curdOparations");
const utilites = require("../../utils/utilites");
const User = require("../../models/User");

const userRagisterHendler = (req, res) => {
   try {
      // user to recived filed value 
      let { name, username, email, password } = req.body;
      let { files: { profile }, } = req;

      // checked all value 
      name = name.length > 0 ? name.trim() : false;
      username = username.length > 0 ? username.trim() : false;
      email = email.length > 0 ? email.trim() : false;
      password = password.length > 1 ? utilites.convartHash(password.trim()) : false;
      profile = profile ? profile : false;

      // if all value is true then go to next step
      if ((name && username && email && password) && profile) {

         // database to get all user 
         curd.read("user",
            /**
             * 
             * @param {boolean} err 
             * @param {Array<object>} data 
             * @returns {object} object
             */
            (err, data) => {
               // check err is then go to if exiquet statement 
               if (err) {
                  // check any other to match user data 
                  const checkUsername = utilites.find(data, "username", username);
                  const checkEmail = utilites.find(data, "email", email);

                  // when founded user data then send err 
                  if (checkUsername && checkEmail) {
                     return res
                        .status(400)
                        .json({ message: "username and email alredy used" });
                  }
                  if (checkUsername) {
                     return res.status(400).json({ message: "username alredy used" });
                  }
                  if (checkEmail) {
                     return res.status(400).json({ message: "email alredy used" });
                  }

                  // this user profile uploaded data
                  utilites.fileUploader(username, profile,
                     /**
                      *
                      * @param {boolean} err
                      * @param {string} apiUrl
                      * @param {string} message
                      * @returns {object}object
                      */
                     (err, apiUrl, message) => {
                        // check user upload true or false the go to next 
                        if (err || err == false) {

                           // finally created new user 
                           const newUser = new User(name, username, email, password, apiUrl);

                           // if user was created then go to next 
                           if (newUser) {

                              // finally add to data in database 
                              curd.create("user", newUser,
                                 /**
                                  *
                                  * @param {boolean} err
                                  * @param {object} data
                                  * @returns {object} object
                                  */
                                 (err, data) => {
                                    if (err) {
                                       return res.status(200).json(data);
                                    } else {
                                       return res
                                          .status(500)
                                          .json({ message: "Internal Server Error" });
                                    }
                                 });
                           } else {
                              return res
                                 .status(500)
                                 .json({ message: "Internal Server Error" });
                           }
                        } else {
                           res.status(200).json({ message: message });
                        }
                     });
               } else {
                  return res.status(500).json({ message: "Internal Server Error" });
               }
            });
      }
   } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
   }
};

module.exports = userRagisterHendler;
