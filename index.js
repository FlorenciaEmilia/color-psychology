const colorData = require("./color-data.js");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  let data = colorData.colorData;
  res.render("home", { data });
});

app.get("/info", (req, res) => {
  let data = colorData.colorData;
  res.render("info", { data });
});

app.get("/:color", (req, res) => {
  const { color } = req.params;
  let colorObj = colorData.colorData[color];
  let data = { ...colorData.colorData };
  if (colorObj) {
    res.render("color-page", { colorObj, data });
  } else {
    res.render("404", { data });
  }
});

app.get("*", (req, res) => {
  let data = colorData.colorData;
  res.render("404", { data });
});

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });
