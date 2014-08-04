// 6a.js

var directory = process.argv[2];
var extension = process.argv[3];

var sixb = require('./6b.js');

var results = sixb(directory, extension, function(err, files) {
	for (i=0; i<files.length; i++) {
		console.log(files[i]);
	}
});

// solution_filter.js:

//     var fs = require('fs')
//     var path = require('path')
    
//     module.exports = function (dir, filterStr, callback) {
    
//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)
    
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
    
//         callback(null, list)
//       })
//     }
