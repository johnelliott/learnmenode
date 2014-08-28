// 9, try 4

var http = require('http');
var urls = process.argv.slice(2, process.argv.length);
var testurls = ['http://www.google.com', 'http://www.wikipedia.org'];

//pack the urls
function packurls(urls) {
    var array=[];
    for (i=0; i<urls.length; i++) {
	array.push([i, urls[i]]);
    }
    return array;
}

var pack = packurls(testurls);	// Change packed var before submit

http.get(pack[i], function(response) {
	var result = '';
	response.setEncoding('utf8');
	response.on('data', function(chunk) {
		result = result + chunk;
	}).on('error', function(error) {
		console.log("There's an error: " + error.message);
	}).on('end', function () {
		console.log(result.length + "\n" + result);
	});
});
