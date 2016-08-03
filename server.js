var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.send("Whoami app. please refer to whoami/ to get further info");
});

app.get("/whoami/", function(req, res) {
  res.send("you got it!");
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
