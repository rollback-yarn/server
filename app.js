const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();


app.use(cors());
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
