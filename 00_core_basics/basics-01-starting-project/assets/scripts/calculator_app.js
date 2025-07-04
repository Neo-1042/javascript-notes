'use strict';
// Reminder: a**b = exponentiation operator
// Adding the calculator logic
const defaultResult = 0; // This value cannot change
let currentResult = defaultResult;

let calculationDescription = '(' + currentResult + ' + 10 + 3/2 - 30' + ')'; 

outputResult(currentResult, calculationDescription); // from vendor.js, fills the content in the <h2> elements
