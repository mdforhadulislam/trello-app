const dotenv = require("dotenv").config();
//const http = require("http");
const app = require("./app/app.js");

const port = process.env.PORT || 3000;

//const createServer = http.createServer(app);

app.listen(port, () => {
  console.log(`
|---------------------------------------------|
|  Server Started Port http://localhost:${port}  |
| version 1 api http://localhost:${port}/api/v1/ |
|---------------------------------------------|
`);
});
