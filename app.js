const express = require("express");
const app = express();
const port = process.env.PORT

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.render("home");
})

app.listen(port, process.env.IP);
