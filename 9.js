// 9.js, juggling async
var http = require ('http');
//var urls = process.argv.slice(2, end); // disregard first two args which are 'node' and the execued file name

// ingest the urls in order
var urls = ["http://google.com", "http://www.apple.com"];
var count = urls.length;

// pack them into a nested array
var urlpack = [];		// init url pack object
for (i=0; i<count; i++) {	// fill url pack
    urlpack[i] = [i, urls[i]];
}

// main function, printing
for (i=0; i<count; i++) {
    console.log('\n' + urlpack[i][2]);
}

// async function to call them in order
var placestrings = function(urlpack, printresults) {
    for (i=0; i<count; i++) {
        var url = urlpack[i][1];
        var string = geturlstring(url);
        urlpack[i][2] = string; // put string into place
    }
};

// build strings
var buildstring = function(response) {
    var result = '';
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
        result = result + chunk;
    }).on('error', function(error) {
        console.log("There's an error: " + error.message);
    }).on('end', function () {
        return result;
    });
};

// async, request urls
http.get(url, buildstrings());


    
// fill their third element with the string using the end statement where I did the console.log before
// make an async function outside that that waits for the all the third elements to be full and then sorts and prints out the strings




