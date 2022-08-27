const express = require("express");
const app = express();
const session = require("express-session");
require("dotenv").config();
const cors = require("cors");

// middlewares imports
const requestLoger = require("./middlewares/requestLoger");
const { ckeckLogin } = require("./middlewares/checkLogin");
const { fileRead } = require("./common");

// all env variables
const port = process.env.PORT;
const secret = process.env.SECRET;

// all  middlerwares connects
app.use(cors());
app.use(express.json());
app.use(
  session({
    name: "trellor-application-session-key",
    secret: secret,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(requestLoger);

// database connection
require("./dbConfig");

// import router files
const authRouter = require("./router/authRouter");
const boardRouter = require("./router/boardRouter");
const listRouter = require("./router/listRouter");
const todoRouter = require("./router/todoRouter");

// routes configarations
app.use("/auth", authRouter);
app.use("/api/boards", ckeckLogin, boardRouter);
app.use("/api/lists", ckeckLogin, listRouter);
app.use("/api/todos", ckeckLogin, todoRouter);

app.get("/:_id", (req, res) => {
  fileRead("views/index.html", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send("there was a server saide problem");
    }
  });
});

app.listen(port, () => {
  console.log(`server is runing this port http://localhost:${port}/`);
});
