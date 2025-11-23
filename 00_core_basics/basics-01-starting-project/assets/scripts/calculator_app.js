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
        if (enteredNumber === 0) {
            return "Cannot divide by zero";
        }
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

// Apply bind()
function calculate(operation) {
    const enteredNumber = getUserNumber();
    const initialResult = currentResult;

    let operator = '';
    if (operation === 'ADD') {
        currentResult += enteredNumber;
        operator = '+';
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = '*';
    } else if (operation === 'DIVIDE') {
        if (enteredNumber === 0) return "DIVISION ERROR";
        
        currentResult /= enteredNumber;
        operator = '/';
    }

    writeOutput(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this, 'ADD')); // Keep in mind that this function is executed only when the button is clicked!

subtractBtn.addEventListener("click", calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener("click", calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener("click", calculate.bind(this, 'DIVIDE'));