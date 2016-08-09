var express = require('express');
var sql = require('sqlite3');
var app = express();

//app.use(express.static('public'));


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/cat', function (req, res) {
  res.send('Hello World, look at my cat!');
});

app.get('/dog', function (req, res) {
  res.send('Hello World, look at my dog!');
});

app.get('/horse', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from the horse!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
