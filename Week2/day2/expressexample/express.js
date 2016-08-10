var express = require('express');
var sql = require('sqlite3');
var app = express();

var tweetsUrl = '/tweets';
var tweetsUrlWithId = '/tweets/:id';

var followedTweetsUrl = '/followedtweets';
var followedTweetsUrlWithId = '/followedtweets/:id';
var allUsersUrl = '/allusers';

app.use(express.static('public'));

app.get('/', function (req, res) {
  
	res.send('Hello World!');
});

app.get('/personal', function (req, res) {
  
	res.sendFile( __dirname + "/public/" + "personal.html" );
});

app.get(tweetsUrl, function (req, res) {
	
	res.send('Hello World! Attach user id for tweets....');
});

app.get(followedTweetsUrl, function (req, res) {
	
	res.send('Hello World!  Attach user id for followed tweets....');
});

app.get(followedTweetsUrlWithId, function (req, res) {
	
	var userid = req.params.id;
	
	var x = require('./getFollowerTweets.js');
	
	var p = x.getFollowerTweetsJSON(userid);
	p.then(
		(val) => {
			res.send(val);
		},
		(err) => {
			console.log('oh no!', err);
		}
	);
});

app.get(tweetsUrlWithId, function (req, res) {
	
	var userid = req.params.id;
	
	var x = require('./getUserTweets.js');
	
	var p = x.getUserTweetsJSON(userid);
	p.then(
		(val) => {
			res.send(val);
		},
		(err) => {
			console.log('oh no!', err);
		}
	);
});

app.get(allUsersUrl, function (req, res) {
	
	var x = require('./getUsers.js');
	
	var p = x.getUserJSON();
	p.then(
		(val) => {
			res.send(val);
		},
		(err) => {
			console.log('oh no!', err);
		}
	);
});


/* app.get('/horse', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from the horse!');
}); */


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
