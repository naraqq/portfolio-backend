const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .get("/", (req, res) => {
    console.log("server is working!!!");

    const data = fs.readFile("profile.json", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.send(data);
        console.log(data);
        // res.end();
      }
    });
  })
  .listen(3003);
