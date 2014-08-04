// 6a.js

var directory = process.argv[2];
var extension = process.argv[3];

var sixb = require('./6b.js');

var results = sixb(directory, extension, function(err, files) {
	for (i=0; i<files.length; i++) {
		console.log(files[i]);
	}
});