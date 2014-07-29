// 5.js

var fs = require('fs');
var path = require('path');
var directory = "/Users/johnelliott/Desktop/";		// testing line
//var directory = process.argv[2];
var dirList = fs.readdir(directory, callback);

function callback (err, files) {
    if (err) throw err;
//    console.log(files);
//    console.log(files.sort(path.extname()));
    var sortedFiles = files.sort(path.extname());
    for ( i=1; i<sortedFiles.length; i++ ) {
	console.log(sortedFiles[i]);
    }
}
// right now it's printing, but not sorting. I need work out the sorting 
