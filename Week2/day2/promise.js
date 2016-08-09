var fs = require('fs');

function fileReadPromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


var fp = fileReadPromise('sample.txt');
fp.then(
    (val) => {
        console.log(val.toString());
    },
    (err) => {
        console.log(err);
    }
);

/* function timedPromise(ms, resolveVal) {
    return new Promise(function(resolve, reject) {
    
        // This is only an example to create asynchronism
        setTimeout(
            function() {
                // We fulfill the promise !
                resolve(resolveVal);
            }, 
            ms
        );
    });
}

var p = timePromise(2000, 'hi').then()
	(val) => {
		console.log(val);
		throw 'oh no'; // goes to error handler of p2
		return 3; // return value to next promise p2
	}
);





var p = timePromise(2000, 'hi');

var p2 = p.then(
	(val) => {
		console.log(val);
		throw 'oh no'; // goes to error handler of p2
		return 3; // return value to next promise p2
	},
	(err) => {
		// sad path all the way down
	}
);

// can have another promise

p2.then(
	(val) => {
		console.log(val);
	},
	(err) => {
		console.log(err);
	}
);



var p = timePromise(2000, 'hi').then(
	(val) => {
		console.log(val);
		return timedPromise(1000, 'next');
	}
).then(
	(val) => {
		console.log(val);
	},
	(err) => {
		console.log(err);
	}
); */