'use strict';
// Reminder: a**b => exponentiation operator
// Adding the calculator logic
const defaultResult = 0; // This value cannot change
let currentResult = defaultResult;

function add(a, b) {
    return a + b;
}

// Note the 'add' syntax
addBtn.addEventListener("click", add); // Keep in mind that this function is executed only when the button is clicked!

outputResult(currentResult, calculationDescription); // from vendor.js, fills the content in the <h2> elements
