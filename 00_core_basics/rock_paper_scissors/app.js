'use strict';

// 'document' is the object
// getElementById() is one of document's METHODS.

// Functions can be stored inside of objects as well.
// Actually, these are called 'METHODS'

const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log("Game is starting ...");
}

// Functions themselves are a special kind of OBJECTS :O
console.log("Typeof functions in JS: " + typeof startGame);
console.dir(startGame);


// startGameBtn is an object. As such, it has properties that are 
// accessible by the dot (.) operator
startGameBtn.addEventListener('click', startGame);