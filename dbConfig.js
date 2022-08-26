require("dotenv").config();
const mongoose = require("mongoose");

const db_link = process.env.DB_URL;

mongoose
  .connect(db_link)
  .then((res) => {
    console.log("contected to database");
  })
  .catch((err) => {
    console.log("can't contected to database");
  });
