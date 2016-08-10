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

function getUserTweetsJSON(userId, callBack) {
	return new Promise((resolve, reject) => {
		var db = new sqlite3.Database('scratch.db');
		var query = "SELECT USERID, TWEET FROM TWEET "
			 + "  WHERE USERID = '" + userId + "'";
		var userTweets = [];
		db.serialize(function() {
			db.each(
				query, 
				function(err, row) {
					userTweets.push(row.TWEET);
				},
				function (err, nRows) {
					if (err) {
						reject(err);
					} else {
						resolve(JSON.stringify(userTweets));
					}					
				}
			);
		});
		db.close();
	});
}

module.exports.getUserTweetsJSON = getUserTweetsJSON;