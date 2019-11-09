const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const { DEVICE_IDS } = require('./constants');


const app = express();


app.use(cors());
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/status/:deviceId', function (req, res) {
  const { deviceId } = req.params;

  if (DEVICE_IDS.indexOf(deviceId) === -1) {
    res.json({ error: 'unknown device id' }, 400);
    return;
  }

  const SIDEA = (Math.random() > 0.7);
  const SIDEB = (Math.random() > 0.7);

  res.json({
    device_id: deviceId,
    SIDEA,
    SIDEB,
  });
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});
