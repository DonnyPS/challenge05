const express = require("express");
const path = require("path");
const app = express();
const allRoutes = require("../routes/route.js");

const userData = {
  username: "123",
  password: "123",
};

app.set("view engine", "ejs");

app.use(allRoutes);

app.listen(5050, () => {
  console.log("Listening on port 5050");
});
