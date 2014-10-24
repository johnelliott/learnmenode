// 9v3.js

var http = require ('http');
// var urls = process.argv.slice(2, end];
// disregard first two args which are 'node' and the execued file name
var urls = ["http://www.google.com", "http://www.apple.com"];

var getstring = function (data) {
    var results = http.get(data, function(response) {
	var result = '';
	response.setEncoding('utf8');
	response.on('data', function(chunk) {
	    result += chunk;
	}).on('error', function(error) {
	    console.log("There's an error: " + error.message);
	}).on('end', function () {
	    console.log(result.length + " lines in file\n");
	    return result;
	});
	return results;
    });
};

// pack them into a nested array
// var urlpack = [];		// init url pack object
// for (i=0; i<urls.length; i++) {	// fill url pack
//     urlpack[i] = [i, urls[i]];
// }

for (i=0; i<urls.length; i++) {
    console.log(getstring(urls[i]));
}


// 8.js answer:
// var http = require('http')
//     var bl = require('bl')

//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err)
//           return console.error(err)
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))
//     })
