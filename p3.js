// cat file | wc -l, only in JS

var fs = require('fs');
var buffer = fs.readFileSync('p3.txt');
var str = buffer.toString();
var array = str.split('\n');
console.log(array.length);

