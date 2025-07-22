'use strict';
// Reminder: a**b => exponentiation operator
// Adding the calculator logic
const defaultResult = 0; // This value cannot change
let currentResult = defaultResult; // Global variable
let logEntries = []; // Array of objects (operation logging)

function getUserNumber() {
    return parseInt(usrInput.value); // outsource the logic that was previously in add()
}

function logOperator(operator) {
    logEntries.push(operator);
    console.log(logEntries);
}

function writeOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor.js file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        operand: operationNumber,
        result: newResult
    };

    logEntries.push(logEntry); // Append the entire JSON to the array (list) of logEntries
    console.log(logEntry.operation); // Dot notation for the JSON
    console.log(logEntries);
}

// Make use of the global constant:
// const userInput = document.getElementById('input-number');
function add() {
    // Does not return any value, it only modifies the global variable 'currentResult'
    const enteredNumber = getUserNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;

    writeOutput("+", initialResult, enteredNumber);
    writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    writeOutput("-", initialResult, enteredNumber);
    writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    writeOutput("*", initialResult, enteredNumber);
    writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeOutput("/", initialResult, enteredNumber);
    writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

// Note the 'add' syntax: Indirect function execution
addBtn.addEventListener("click", add); // Keep in mind that this function is executed only when the button is clicked!
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);