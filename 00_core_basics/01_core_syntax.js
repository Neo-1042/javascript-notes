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
let $variable = 0; // Allowed, but I don't like it, because it can be confused with PHP or jQuery
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