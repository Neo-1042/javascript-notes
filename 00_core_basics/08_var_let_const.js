'use strict';

/*
ES5 vs ES6

ECMA Script => Language especification

ES6 = ECMA Script 2015 is a modern version JavaScript

For example, JavaScrip ES5 ONLY had 'var'
('let' and 'const' came later with ES6)

*/

var normalVar = 100; // Available from the beginning
// 'var' allows to write variables in the FUNCTION and GLOBAL scope

let newVar = 2015; // Available from ES6
// 'let' gives you access to BLOCK scope

const PI = 3.14159; // ES6. BLOCK SCOPE

// Any value written with 'const' or 'let' outside of a function is GLOBAL.
// Any value written with 'const' or 'let' inside of a function is LOCAL.

// DEMO

let name1 = 'Rodrigo'; // GLOBAL scope

function greet() {
    let age = 29; // LOCAL scope, only visible by greet()
    console.log("Hello " + name1 + ", you are " + age + " years old.");
}

greet();




