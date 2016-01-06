var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var execSync = require('child_process').execSync;

app.use(express.static('public'));
app.use(bodyParser.json());

var count = 0;
execSync("echo ");


var setLedState = function(val) {
  try {
    execSync("echo 1 >/sys/class/leds/led0/brightness");
  } catch(e) {
    console.error("Could not set LED state to " + val);
  }
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/activity/', function (req, res) {
  //console.log("Got a post request:")
  //console.log(req.body);
  console.log("Changes:", req.body.numberOfChanges);

  setLedState(1);
  setTimeout(function() {
    setLedState(0);
  }, 1000);
  res.end();
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
