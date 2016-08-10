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

function getUserJSON(callBack) {
	
	return new Promise((resolve, reject) => {
		var db = new sqlite3.Database('scratch.db');
		var query = "SELECT * FROM USER ";
		var users = [];
		db.serialize(function() {
			db.each(
				query, 
				function(err, row) {
					users.push(row.NAME);
				},
				function (err, nRows) {
					if (err) {
						reject(err);
					} else {
						resolve(JSON.stringify(users));
					}					
				}
			);
		});
		db.close();
	});
}

module.exports.getUserJSON = getUserJSON;