// 9v2.js, juggling async
// get the urls
// count the urls
// make async calls for three urls and call back a function to place them in the data structure
// place the data into the data structure and call back 
// print the data to the consoe
// var urls = ["http://google.com", "http://www.apple.com"];

var http = require ('http');
var urls = process.argv.slice(2, end); // disregard first two args which are 'node' and the execued file name

// pack them into a nested array
var urlpack = [];		// init url pack object
for (i=0; i<urls.length; i++) {	// fill url pack
    urlpack[i] = [i, urls[i]];
}


function placeurl (string, printurls) {
    urlpack[i][2] = string;
}

// execute
for (i=0; i<urls.length; i++) {
	http.get(url, placeurl);
}	

function makestring (response, printstrings) {
	var result = '';
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		result = result + chunk;
	}).on('error', function(error) {
		console.log("There's an error: " + error.message);
	}).on('end', function () {
		printstrings(result);
	});
}

function printstrings (){}
