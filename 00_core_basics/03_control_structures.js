"use strict";

/* Module Content
    if statements
    Boolean Values and Operators
    Loops
    Error Handling
*/

// BOOLEAN OPERATORS

let a = true;
let b = false;

let c; // Undefined

c = a || b;
c = a && b;

/* Equality operators
    ==  Checks for value equality
    === Checks for value AND type equality

    3 == '3' is TRUE
    3 === '3' is FALSE

    === Forces you to write better code
*/

// !!! Beware of comparissons of Objects and Arrays !!!
let object1 = {name : 'Rodrigo'};
let object2 = {name : 'Rodrigo'};

const array1 = ['COD', 'MOBILE'];
const array2 = ['COD', 'MOBILE'];

console.log(object1 == object2); // FALSE
console.log(object1 === object2); // FALSE

console.log(array1 == array2); // FALSE
console.log(array1 === array2); // FALSE

// 2 objects stores in different variables will never be the same
