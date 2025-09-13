'use strict';

// In JavaScript we have these types of loops:

// 1] for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 2] for-of => ARRAYS
// A new const x is generated for each iteration
for (const x of someArray) {
    console.log(x);
}

// 3] for-in => OBJECT
// Create a NEW constant for every iteration
for (const key in objeto) {
    console.log(key);
    console.log(obj[key]);
}

// 4] while loop
let j = 0;
while ( j < 10) {
    console.log(j);
    j++;
}

let randomNumbers = [];
let finished = false;
while (!finished) {
    const rndNumber = Math.random(); // pseudo-random number between 0 and 1
    randomNumbers.push(rndNumber);
    if (rndNumber > 0.5) {
        finished = true;
    }
    console.log(randomNumbers);
}

// 5] do-while
// Execute the loop body before the condition is checked

do {
    console.log(j);
    j++;
} while (j < 20);