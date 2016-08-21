/*
table users
id
name
password
email

table teamusers
iduserid fk
teamid fk

table channels
id
name
teamid pk
description

table messages
id
userid
channelid
teamid
description
type (team,private)
*/
var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

function createDatabase(){

};

exports.connection = connection;

function connection(filename) {
    var dbexists = false;
    try {
        fs.accessSync(filename);
        dbexists = true;
    } catch (ex) {
        dbexists = false;
    }

    if (!dbexists) {
        // Run 'node createSlackDatabase.js''
        // createDatabase(filename); // this does not yet work....
    };

    var slackDatabase = new sqlite3.Database(filename);

    return slackDatabase;
};

exports.getTeamMembers = getTeamMembers;

function getTeamMembers(conn, teamName) {

    return new Promise((resolve, reject) => {
		
		var query = "SELECT TEAMID, USERID FROM SLACK_TEAM_MEMBERS WHERE TEAMID='"+teamName+"'";

		var users = [];

		conn.serialize(function() {
			conn.each(
				query, 
				function(err, row) {
					users.push(row.USERID);
				},
				function (err, nRows) {
					if (err) {
						reject(err);
					} else {
						resolve(users);
					}					
				}
			);
		});
		//db.close();
	});    
};

exports.getUserMessages = getUserMessages;

function getUserMessages(conn, userId) {

    return new Promise((resolve, reject) => {

		var query = "SELECT MESSAGE FROM SLACK_MESSAGES " 
		+ "INNER JOIN SLACK_TEAM_MEMBERS " 
		+ "ON SLACK_MESSAGES.TEAMID=SLACK_TEAM_MEMBERS.TEAMID "
		+ "AND SLACK_TEAM_MEMBERS.USERID = '" + userId + "'";

		var messages = [];

		conn.serialize(function() {
			conn.each(
				query, 
				function(err, row) {
					messages.push(row.MESSAGE);
				},
				function (err, nRows) {
					if (err) {
						reject(err);
					} else {
						resolve(messages);
					}					
				}
			);
		});

    });
    
};

exports.addSlackUser = addSlackUser;

function addSlackUser(conn, teamId, userId, password, email) {

	return new Promise((resolve, reject) => {

		var member_insert_query = "INSERT INTO SLACK_MEMBERS (USERID, PASSWORD, EMAIL) " +             
            "VALUES ('"+userId+"','"+password+"','"+email+"')";

		var team_insert_query = "INSERT INTO SLACK_TEAM_MEMBERS (USERID, TEAMID) " +             
            "VALUES ('"+userId+"','"+teamId+"')";

		var select_query = "SELECT USERID, PASSWORD, EMAIL FROM SLACK_MEMBERS WHERE USERID='"+userId+"'";

		var user = [];

		conn.serialize(function() {

			conn.run(member_insert_query,function(err, row) {
				if (err) {
					reject('insert user failed - duplicate user....');
				}
			});

			conn.run(team_insert_query);

			conn.each(
				select_query, 
				function(err, row) {
					user.push(row.EMAIL);
				},
				function (err, nRows) {
					if (err) {
						reject(err);
					} else {
						resolve(user);
					}					
				}
			);
		});

    });

};

exports.addUserMessage = addUserMessage;

function addUserMessage(conn, userId, teamId, message) {

	return new Promise((resolve, reject) => {

		var validate_user_query = "SELECT * FROM SLACK_MEMBERS WHERE USERID='"+userId+"'";

		var validate_team_query = "SELECT * FROM SLACK_TEAMS WHERE TEAMID='"+teamId+"'";

		var message_insert_query = "INSERT INTO SLACK_MESSAGES (USERID, TEAMID, MESSAGE) " +             
            "VALUES ('"+userId+"','"+teamId+"','"+message+"')";

		var validate_message_query = "SELECT * FROM SLACK_MESSAGES WHERE TEAMID='"+teamId+"' AND USERID='"+userId+"'";

		var messages = [];

		conn.serialize(function() {

			conn.each(
				validate_user_query, 
				function(err, row) {
					
				},
				function (err, nRows) {
					if (err) {
						reject(err);
					} else {
						// user is valid.
					}					
				}
			);

			conn.each(
				validate_team_query, 
				function(err, row) {
					
				},
				function (err, nRows) {
					if (err) {
						reject(err);
					} else {
						// team is valid.
					}					
				}
			);

			conn.run(message_insert_query);

			conn.each(
				validate_message_query, 
				function(err, row) {
					messages.push(row.MESSAGE);
				},
				function (err, nRows) {
					if (err) {
						reject(err);
					} else {
						
						resolve(messages);
					}					
				}
			);
		});
	});
};

exports.validateUser = validateUser;

function validateUser(conn, userId, password) {

	return new Promise((resolve, reject) => {

		var users = []; // should only return one at most

		var validate_user_query = "SELECT * FROM SLACK_MEMBERS WHERE USERID='"+userId+"' AND PASSWORD='"+password+"'";

		conn.serialize(function() {

			conn.each(
				validate_user_query, 
				function(err, row) {
					users.push(row.USERID);
				},
				function (err, nRows) {
					if (err) {
						reject(err);
					} else {
						resolve(users);
					}					
				}
			);

		});

	});

};