var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var execSync = require('child_process').execSync;

app.use(express.static('public'));
app.use(bodyParser.json());

var count = 0;

var setLedState = function(val) {
  try {
    //console.log("Setting led state to " + val);
    execSync("echo " + val + " >/sys/class/leds/led0/brightness");
  } catch(e) {
    console.error("Could not set LED state to " + val);
  }
}

app.get('/traffic/', function (req, res) {
  res.send('' + count);
});

app.post('/activity/', function (req, res) {
  //console.log("Got a post request:")
  //console.log(req.body);
  console.log("Changes:", req.body.numberOfChanges);
  count = 1;
  res.end();
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log("Setting up change decreasing loop");

  var updateFrequency = 30;
  var onDuration = 1;
  setInterval(function() {
    count = Math.max(0, count - 1/(onDuration*updateFrequency));
    if(count <= 0) {
      setLedState(0);
    }
    else {
      setLedState(255);
    }
  }, 1000/updateFrequency);
});
