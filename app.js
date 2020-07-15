require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.SERVER_PORT;
const app = express();
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/upload", express.static("./upload"));
app.use("/upload", express.static("./upload"));

const router = require("./src/routers/index");

app.use(
  "/api/v1",
  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    next();
  },
  router
);

app.listen(port, () => {
  console.log(`\n App Listen port ${port}`);
});

module.exports = app;
