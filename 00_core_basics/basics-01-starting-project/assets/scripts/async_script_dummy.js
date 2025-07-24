'use strict'

// You should use 'async' for when your JS script does not rely on the content of the HTML file to be
// fully loaded
console.log("This script will be loaded early and executed as soon as possible");
console.log("Since the async option was added when we import this script in the HTML file");
console.log("async does not guarantee the order of execution");

// END