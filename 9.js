// 9.js, juggling async
var http = require ('http');
var urls = process.argv.slice(2, end); // disregard first two args which are 'node' and the execued file name
// var urls = ["http://google.com", "http://www.apple.com"];
var count = urls.length;

var urlpack = [];		// init url pack object
for (i=0; i<count; i++) {	// fill url pack
    urlpack[i] = [i, urls[i]];
}				// ok, so this thing builds the url data structure for que, url, and maybe string of its contents

// two nested callbacks would suck
// could do

// ok, here's what it might look like to do just a loop

for (i=0; i<count; i++) {
    var url = urlpack[i][1]; // use a single URL as the argument from my previously made function
    http.get(url, function(response) {
	var result = '';
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
	    result = result + chunk;
	}).on('error', function(error) {
	    console.log("There's an error: " + error.message);
	}).on('end', function () {
	    // urls[i].append(result) to add the resulting string as the third bit of the urlpack
	    if (urlpack.length == 3) {
		//then print them out in order
		for (i=0; i<count; i++) {
		    console.log("\n" + urlpack[i][2]); // print string
		}
	    }
	}
	     );
    };


// what about having them build an array of their names, then once the count is three, log out their names in the order I want?
