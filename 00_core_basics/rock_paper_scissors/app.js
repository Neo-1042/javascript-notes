'use strict';

// 'document' is the object
// getElementById() is one of document's METHODS.

// Functions can be stored inside of objects as well.
// Actually, these are called 'METHODS'

const startGameBtn = document.getElementById('start-game-btn');

// Declare your function using the better approach
const start = function () {
    console.log("Game is starting ...");
}

// Functions themselves are a special kind of OBJECTS :O
console.log("Typeof functions in JS: " + typeof start);
console.dir(start);

let myFunction = function game() {
    console.log("Function stored inside a variable");
};

myFunction();

// startGameBtn is an object. As such, it has properties that are 
// accessible by the dot (.) operator
startGameBtn.addEventListener('click', start);