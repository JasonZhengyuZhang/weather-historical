const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile('./public/index.html');
});

var request = require('request');
app.get('/weather', function(req, res) {
    request('https://api.darksky.net/forecast/c49ded6a7aff6ace26f8d2211f21c584/37.8267,-122.4233', function(error, response, body) {
        res.json(body)
    });
});

app.listen(process.env.PORT || 8080);