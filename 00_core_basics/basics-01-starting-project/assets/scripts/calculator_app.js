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

function calculateResult(calculationType) {
    const enteredNumber = getUserNumber();
    const initialResult = currentResult;
    let mathOperator;

    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    } else {
        return "Not a defined operation";
    }

    writeOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// Make use of the global constant:
// const userInput = document.getElementById('input-number');
function add() {
    // Does not return any value, it only modifies the global variable 'currentResult'
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

// Note the 'add' syntax: Indirect function execution
addBtn.addEventListener("click", add); // Keep in mind that this function is executed only when the button is clicked!
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);