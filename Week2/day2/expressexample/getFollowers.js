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

//var db = new sqlite3.Database('scratch.db');

function getFollowersJSON(userId, callBack) {
	return new Promise((resolve, reject) => {
		var db = new sqlite3.Database('scratch.db');
		var query = "SELECT USERID, FOLLOWERID FROM FOLLOWER "
			 + "  WHERE USERID = '" + userId + "'";
		var followers = [];
		db.serialize(function() {
			db.each(
				query, 
				function(err, row) {
					followers.push(row.FOLLOWERID);
				},
				function (err, nRows) {
					if (err) {
						reject(err);
					} else {
						resolve(JSON.stringify(followers));
					}					
				}
			);
		});
		db.close();
	});
}

module.exports.getFollowersJSON = getFollowersJSON;
