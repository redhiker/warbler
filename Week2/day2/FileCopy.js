var fs = require('fs');

fs.createReadStream('test.txt').pipe(fs.createWriteStream('out_test.txt');

var readStream = fs.ceateReadStream('text.txt');
var writeStream = fs.createWriteStream('out_text.txt');
readStream.pipe(writestream);
console.log('starting pipe');

writestream.on('fiinish', 90 => {
	
}




function fileWritePromise(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile (path, data, (err) => {
            if(err) {
                reject(err);
            }
            else {
                console.log('actually wrote file');
                resolve();
            }
        });
    });
}

function fileReadPromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}

var rp = fileReadPromise('sample.txt');

rp.then(
    (val) => {
        console.log(val.toString());
        return fileWritePromise('sample2.txt', val);
    }
).catch(
    (err) => {
        console.log(err);
    }
);
