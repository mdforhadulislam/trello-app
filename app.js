const express = require("express");
const app = express();
const session = require("express-session");
require("dotenv").config();
const cors = require("cors");

// all env variables
const port = process.env.PORT;
const secret = process.env.SECRET;

// all  middlerwares connects
app.use(cors());
app.use(express.json());

app.use(
  session({
    name: "todo-application-session-key",
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 8800,
      sameSite: true,
    },
  })
);

// database connection
require("./dbConfig");

// import router files
const authRouter = require("./router/authRouter");
// routes configarations
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send(req.session.user);
});

app.listen(port, () => {
  console.log(`server is runing this port http://localhost:${port}/`);
});
