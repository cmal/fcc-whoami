var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.send("Whoami app. please refer to whoami/ to get further info");
});

app.get("/whoami/", function(req, res) {
  res.send("you got it!");
});

app.listen(8080, function() {
  console.log("app started");
});
