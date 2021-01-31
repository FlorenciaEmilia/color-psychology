const colorData = require("./color-data.js");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  let data = colorData.colorData;
  res.render("home", { data });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
