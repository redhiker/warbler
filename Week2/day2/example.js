//console.log("hi....");

var fs = require('fs');

var example = require('./example2.js');


fs.readFile('sample.txt',(err,data) => {
	if (err) throw err;
	console.log(data.toString());	

	fs.writeFile('sample2.txt', data, (err) => {
		if (err) {
			throw err;
		}
		console.log('it is saved.');
	});	
});
	






