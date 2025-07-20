'use strict';
// Reminder: a**b => exponentiation operator
// Adding the calculator logic
const defaultResult = 0; // This value cannot change
let currentResult = defaultResult; // Global variable
let logEntries = [];

function getUserNumber() {
    return parseInt(usrInput.value); // outsource the logic that was previously in add()
}

function writeOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor.js file
}

// Make use of the global constant:
// const userInput = document.getElementById('input-number');
function add() {
    // Does not return any value, it only modifies the global variable 'currentResult'
    const enteredNumber = getUserNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    writeOutput("+", initialResult, enteredNumber);
    logOperator("+");
}

function subtract() {
    const enteredNumber = getUserNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    writeOutput("-", initialResult, enteredNumber);
    logOperator("-");
}

function multiply() {
    const enteredNumber = getUserNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    writeOutput("*", initialResult, enteredNumber);
    logOperator("*");
}

function divide() {
    const enteredNumber = getUserNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeOutput("/", initialResult, enteredNumber);
    logOperator("/");
}

function logOperator(operator) {
    logEntries.push(operator); 
    console.log(logEntries);
}

// Note the 'add' syntax: Indirect function execution
addBtn.addEventListener("click", add); // Keep in mind that this function is executed only when the button is clicked!
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);