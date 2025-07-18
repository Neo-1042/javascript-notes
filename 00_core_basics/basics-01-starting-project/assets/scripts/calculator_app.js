'use strict';
// Reminder: a**b => exponentiation operator
// Adding the calculator logic
const defaultResult = 0; // This value cannot change
let currentResult = defaultResult; // Global variable

// Make use of the global constant:
// const userInput = document.getElementById('input-number');
function add() {
    // Does not return any value, it only modifies the global variable 'currentResult'
    const calcDescription = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + parseInt(userInput.value); // number + number
    outputResult(currentResult, "Your calculation: "+ calcDescription); // display the calculated result
}

// Note the 'add' syntax: Indirect function execution
addBtn.addEventListener("click", add); // Keep in mind that this function is executed only when the button is clicked!

// Let's add this code to run after the botton was clicked
// outputResult(currentResult, calculationDescription); // from vendor.js, fills the content in the <h2> elements
