// 6b.js
// directory reading and filtering function

var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
    var answer = fs.readdir(directory, callback);
    return answer;
};

function callback (err, files) {
    if (err)
	return callback(err);
    var array = [];
    //    debugger;
    for (i=0; i<files.length; i++) {
	if (path.extname(files[i]) == '.' + extension) {
	    //	    debugger;
	    array.push(files[i]);
	}
    }
    return (null, array);
}
