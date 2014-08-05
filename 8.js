// 8.js
var http = require ('http');
var url = process.argv[2];	// get url

http.get(url, function(response) {
	var result = '';
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		result = result + chunk;
	}).on('error', function(error) {
		console.log("There's an error: " + error.message);
	}).on('end', function () {
		console.log(result.length + "\n" + result);
	});
});

