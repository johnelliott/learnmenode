// 7.js
var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		console.log(chunk);
	}).on('error', function(error) {
		console.log("There's an error: " + error.message);
	}).on('end', function () {
		// body...
	});
});
