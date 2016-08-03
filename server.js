var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.send("Whoami app. please refer to whoami/ to get further info");
});

app.get("/whoami/", function(req, res) {
  var obj = {};
  obj.ipaddress = req.ip;
  obj.language = req.get("accept-language");
  obj.software = req.get("user-agent");
  res.send(JSON.stringify(obj));
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
