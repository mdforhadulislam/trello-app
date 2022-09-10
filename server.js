const dotenv = require("dotenv").config();
const http = require("http");
const app = require("./app/app");

const port = process.env.PORT || 3000;

const createServer = http.createServer(app);

createServer.listen(port, () => {
  console.log(`
|---------------------------------------------|
|  Server Started Port http://localhost:${port}  |
| version 1 api http://localhost:${port}/api/v1/ |
|---------------------------------------------|
`);
});
