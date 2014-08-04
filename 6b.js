// 6b.js
// directory reading and filtering function

var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function (err, files) {
    if (err) return callback(err);

    var array = [];
    for (i=0; i<files.length; i++) {
      if (path.extname(files[i]) == '.' + extension) {
        array.push(files[i]);
      }
    }
    return callback(null, array);
  });
};