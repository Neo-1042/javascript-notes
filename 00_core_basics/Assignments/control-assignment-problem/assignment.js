'use strict';

const r1 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const r2 = Math.random();
// Exercise 1: alert when the number is greater than 0.7
if (r1 > 0.7) {
    alert(r1 + " is greater than 0.7"); 
}

// Exercise 2: Create an array of numbers and loop through the array in two different ways
let myArray = [0, 10, 20, 30, 40, 50];

console.log("First way of displaying the contents of the array: ");
for (let i = 0; i < myArray.length ; i++) {
    console.log(myArray[i]);
}

console.log("Second way:");
for (const number of myArray) {
    console.log(number);
}

// Exercise 3: modify one of the loops in E2 so that it prints the numbers backwards
console.log("Backwards numbers:");
for (let j = myArray.length - 1 ; j > -1 ; j--) {
    console.log(myArray[j]);
}

// Exercise 4: create another random number and show alert for the following condition:
// Both numbers are greater than 0.7 OR at least one of the two is NOT greater than 0.2
console.log("Exercise 4");

if (r1 > 0.7 && r2 > 0.7) {
    console.log("Both numbers are greater than 0.7");
    alert("ALERT 1");
} else if (r1 <= 0.2 || r2 <= 0.2) {
    console.log("At least of r1 or r2 is NOT greater than 0.2");
    alert("ALERT 2");
}

console.log("Numbers : ");
console.log(r1);
console.log(r2);

// EOF