var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

var filename = 'scratch.db';
var dbexists = false;
try {
    fs.accessSync(filename);
    dbexists = true;
} catch (ex) {
    dbexists = false;
}

var db = new sqlite3.Database('scratch.db');

function getFollowerTweetsJSON(userId, callBack) {
	return new Promise((resolve, reject) => {
		var query = "SELECT TWEET FROM TWEET " 
		+ "INNER JOIN FOLLOWER " 
		+ "ON TWEET.USERID=FOLLOWER.FOLLOWERID "
		+ "AND FOLLOWER.USERID = '" + userId + "'";
		var followerTweets = [];
		db.serialize(function() {
			db.each(
				query, 
				function(err, row) {
					followerTweets.push(row.TWEET);
				},
				function (err, nRows) {
					if (err) {
						reject(err);
					} else {
						resolve(JSON.stringify(followerTweets));
					}					
				}
			);
		});
	});
}

var p = getFollowerTweetsJSON('abu');
p.then(
    (val) => {
        console.log(val);
    },
    (err) => {
        console.log('oh no!', err);
    }
);

db.close();