// cat file | wc -l, only in JS

var fs = require('fs')

var file = process.argv[2]; // use the first argument node prog.js filename where filename is the [2] argument
var buffer = fs.readFileSync(file);
var str = buffer.toString();
var array = str.split('\n');
console.log(array.length-1);
