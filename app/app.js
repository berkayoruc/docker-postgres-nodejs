const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const request = require("request");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log(`Server is running.`);
});

var requestAsync = function (url) {
  return new Promise((resolve, reject) => {
    var req = request(url, (err, response, body) => {
      if (err) return reject(err, response, body);
      resolve(JSON.parse(body));
    });
  });
};

var getParallel = async function (urls) {
  //transform requests into Promises, await all
  var data;
  try {
    data = await Promise.all(urls.map(requestAsync));
  } catch (err) {
    console.error(err);
  }
  // console.log(data);
  return data;
};

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/gel", db.getMethod);
