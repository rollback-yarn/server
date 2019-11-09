const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const { DEVICE_IDS } = require('./constants');
const creelLocationFaker = require('./creelLocationFaker');


const app = express();


app.use(cors());
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello World!');
});

let currentlyActiveMachineLight = null;

app.get('/status/:deviceId', function (req, res) {
  const { deviceId } = req.params;

  if (DEVICE_IDS.indexOf(deviceId) === -1) {
    res.json({ error: 'unknown device id' }, 400);
    return;
  }

  const SIDEA = creelLocationFaker(currentlyActiveMachineLight, deviceId, 'A');
  const SIDEB = creelLocationFaker(currentlyActiveMachineLight, deviceId, 'B');

  res.json({
    device_id: deviceId,
    SIDEA: SIDEA ? 1 : 0,
    SIDEB: SIDEB ? 1 : 0,
  });
});

app.post('/creelside', function (req, res) {
  res.json(req.body);
});

app.post('/lightCreelSides', function (req, res) {
  const { machine_name: machineName, switch_off: off } = req.body;
  if (off) {
    currentlyActiveMachineLight = null;
  } else {
    currentlyActiveMachineLight = machineName
  }
  res.json({ success: true })
})

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});
