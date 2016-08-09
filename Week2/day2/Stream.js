var fs = require('fs');

fs.createReadStream('sample.txt').pipe(fs.createWriteStream('sample2.txt'));

//var readStream = fs.ceateReadStream('text.txt');
//var writeStream = fs.createWriteStream('out_text.txt');
//readStream.pipe(writestream);