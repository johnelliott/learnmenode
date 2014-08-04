// 6a.js

var directory = process.argv[2];
var extension = process.argv[3];

var sixb = require('./6b.js');

// call my function, passing path and extension
// print to console form here

console.log(sixb(directory, extension));
