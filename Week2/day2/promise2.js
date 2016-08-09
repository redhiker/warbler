var fs = require('fs');

function fileWritePromise(path,data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
			if (err) {
				throw err;
			}
			console.log('it is saved.');
		});
    });
}


var fp = fileWritePromise('sample.txt','here is some data....');
fp.then(
    (val) => {
        console.log(val.toString());
    },
    (err) => {
        console.log(err);
    }
);