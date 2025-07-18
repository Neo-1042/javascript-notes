'use strict';
// Core syntax
// Variables and Data Types
// Operators
// Function basics

// Variables
let userName = 'Rafa';
userName = 'Rodrigo';

// Constants
// Use constants as often as possible
const totalUsers = 10;
totalUsers = 20; // ERROR, totalUsers' value cannot change

let currentResult = 0; // camelCase for JavaScript is customary
let current_result = 0; // BAD PRACTICE for JS (snake_case)
let $variable = 0; // Allowed, but I don't like it, because it can be confused with PHP, jQuery or variable substitution
let _foo = 'FOO'; // Allowed, but I don't like it either
// let 4var = 0; NOT allowed
// let var-b = 0; NOT allowed
/////////////////////////////////////////////////////////////////////////////////////////
// DATA TYPES
// Strings: 'Hello', "Hello", `Hello` (Multiline strings)
const PI = 3.14159;
let myString = "This string contains a quote: 'hello,\nworld' ";
let escapedCharacters = "This is a single quote: \' \n This is a backslash: \\ ";
// Back ticks allow for variable substitution like in shell ${variable}:
let myBackTickString = `Hello, world. The value of pi is: ${PI}`;

let multiLineString = `This is
    valid
    Java script
    syntax
`; // WARNING: the added line breaks and tabs are actually part of the string, they are just not
// actually rendered by the browser.

///// FUNCTIONS /////

// Functions may or may not return a value
function greetUser(userName) {
    alert("hello," + userName);
}
greetUser('Rodrigo');
// Functions have a special behavior in JS. Functions are read before the js script is executed
// Thus, you can have a call to foo() before function foo() is defined (I don't like this feature)

///// GLOBAL and LOCAL SCOPE /////
let globalVar;

function foo() {
    let bar = 10; // this is a local variable, only visible to foo()
    globalVar = -2; // Not a good practice, but allowed
}

function foo2() {
    // Pure function: doesn't modify any global variables
    let num = 10;
    num = num + 1;
}
// Local variables do NOT exist here

// Shadowing //
let shadow = "Global variable";

function foo3() {
    let shadow = "Local variable. This variable is shadowed by the global variable";
}

// Write a function named 'transform' that takes two inputs:
// A number as a first argument and another function as the second argument
// The goal is to call that received function inside of 'transform' and pass the number argument
// into it. The result is calling that received function with the passed number.

function transform(numFoo, functionBar) {
    return functionBar(numFoo); // Catch the value with the return statement
}

///// CONVERTING DATA TYPES /////

// Even if an input field is marked as "number", it is handled by JS as a string
function add() {
    // currentResult = currentResult + userInput.value; // number + string WRONG
    currentResult = currentResult + parseFloat(userInput.value); // number + number OK
    outputResult(currentResult,'');
}

function add2() {
    // Instead of parseInt() or parseFloat(), you can use an extra '+' sign
    currentResult = currentResult + +userInput.value; // NOTICE the extra '+' sign. I DON'T LIKE IT!! WTF JavaScript?!
    outputResult(currentResult, '');
}