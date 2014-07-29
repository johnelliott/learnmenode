// 4.js

var fs = require('fs');
// var file = './p3.txt';
var file = process.argv[2];

var lines = fs.readFile(file, 'utf8', callback);

function callback (err, data) {
    if (err) throw err;
    console.log(data.split('\n').length -1 );
}
