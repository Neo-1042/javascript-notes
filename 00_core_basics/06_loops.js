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

// Use 'break' to stop the loop execution
let myArray = [100,200,300,400,500,600,700,800,900,1000];

for (const x of myArray) {
    if (x > 300) break;
    console.log(x); // 100, 200, 300
}

// Use 'continue' to skip iterations
for (let i = 0; i < myArray.length; i++) {
    if (i % 2 === 1) continue; // does not execute the rest of the loop
    console.log("Entradas impares = " + myArray[i]);
}

// LABELED STATEMENTS FOR LOOPS (rarely used)
// Suppose you have nested loops. 
// Some condition in the inner loop should stop/skip iterations in the outer loop
// How to access the outer loop from the inner loop?

outerFor: for (let i = 0; i < 10 ; i++) {
    console.log("OUTER LOOP");
    innerFor: for (let j = 0; j < 10 ; j++) {
        console.log("INNER LOOP");
        if (j % 7 === 0) break outerFor;
    }
}

// EOF