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

// solution.js:

//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]
    
//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)
    
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })