'use strict';

/*
ES5 vs ES6

ECMA Script => Language especification

ES6 = ECMA Script 2015 is a modern version JavaScript

For example, JavaScrip ES5 ONLY had 'var'
('let' and 'const' came later with ES6)

*/

var normalVar = 100; // Available from the beginning of JavaScript
// 'var' allows to write variables in the FUNCTION and GLOBAL scope

let newVar = 2015; // Available from ES6
// 'let' gives you access to BLOCK scope

const PI = 3.14159; // ES6. BLOCK SCOPE

// Any value written with 'const' or 'let' outside of a function is GLOBAL.
// Any value written with 'const' or 'let' inside of a function is LOCAL.
//////////////////////////////////////////////////////////////////////
// LET DEMO

let name1 = 'Rodrigo'; // GLOBAL scope

function greet() {
    let age = 29; // LOCAL scope, only visible by greet()
    console.log("Hello " + name1 + ", you are " + age + " years old.");
}
greet();

{
    // This syntax is allowed
    let a = 100;
    let b = 200;
}

//////////////////////////////////////////////////////////////////////
// VAR vs LET DEMO
// 'var' variables allow to write in the FUNCTION and GLOBAL scope
var name2 = 'Max';

// if statement != function
if (name2 === 'Max') {
    var hobbies = ['Sports', 'Cooking']; // GLOBAL variable
    let hobbies2 = ['Sports', 'Cooking']; // LOCAL variable (local to the if block)
    console.log(hobbies); 
}

function greet2() {
    var age = 100;
    var name2 = "Manuel";
    console.log(name2, age);
}

console.log(name2, hobbies); // hobbies is available, hobbies2 is NOT

// VAR => GLOBAL and FUNCTION scope
// LET => BLOCK SCOPE (curly braces {})

// !!! In modern JavaScript, DO NOT use 'var' anymore.
// Always use LET

//////////////////////////////////////////////////////////////////////
// HOISTING: pre-scan that JS performs before code execution

console.log(userName); // undefined, but no error because of hoisting
var userName = 'Arceus';

console.log(newName); // Uncaught ReferenceError: Cannot access 'newName' before initialization
let newName = 'Palkia';

// With 'let', you are forced to only use your variables AFTER you declare and initialize them.

var foo = 1;
var foo = 2; // this is stupid, but is allowed in JavaScript (no suprises here)

bar = 'Book'; // This is allowed because JS is a hippy language

// Partial fix: add 'use strict'; at the beginning of your script
// STRICT MODE was introduced with ES5