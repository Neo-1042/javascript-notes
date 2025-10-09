'use strict';

/*
PRIMITIVE VALUES

Stored in memory (normally in the Stack)
Variables store the value itself
Easily restored
Re-assigning a variable to another variable copies the actual value.

strings
numbers
booleans
null
undefined
symbol

*/

let name1 = 'Rodrigo';
let name2 = name1;
console.log(name2); // 'Rodrigo'

name1 = 'Linux';
console.log(name1); // 'Linux'
console.log(name2); // 'Rodrigo'

/*
REFERENCE VALUES

All JavaScript Objects

More "expensive" to create.
Stored in memory (HEAP)
The variable stores a pointer (address or reference) to a location in memory.

This behavior helps to be more efficient in memory handling.
*/

let myObject1 = {
    pokemon1 : 'Ditto',
    pokemon2 : 'Poliwhirl'
};

let myObject2 = myObject1; // Points to the SAME OBJECT

myObject1 = {
    pokemon1: 'Mew',
    pokemon2: 'Eevee'
}; // myObject2 is also modified, since it points to the same object.

// Let's create a real copy:
// SPREAD OPERATOR
// ...
let copy1 = { ...myObject1 };

// Comparing 2 objects with '==='
const person1 = { age : 30 };
const person2 = { age : 30 };

person1 === person2 ; // FALSE. These are different objects, different addresses

// Actually, you can change the person1's age.
person1.age = 5; // This is ok, since you are not changing the REFERENCE.

// The address remains constant, even if the object changes
const hobbies = ['Sports']; // The ADDRESS is getting stored in this constant.
hobbies.push('Music'); // No errors :O
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
/* GARBAGE COLLECTION

How is the HEAP managed?

V8's Garbage Collector periodically checks the HEAP for unused objects, that is,
objects without references.

The Garbage Collector's main task is to sweep unused objects from memory.
*/

let person3 = { namex : 'Max' };
person3 = null;
// This object will be garabage-collected.

/*
However, you cannot trigger the GB whenever you want.

Plus, you might have an object that induces memory leaks :O
*/

// MemoryLeak.js example:

const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

let persona = { name : 'Chester'};
persona = null;

function printMessage() {
    const value = messageInput.value;
    console.log(value || 'Clicked me!');
}

// Anonymous function
// A new function is created for EVERY execution of addListener()
// This is DANGEROUS since you can have many functions stored in memory (HEAP)
function addListener() {
    clickableBtn.addEventListener('click', function() {
        const value = messageInput.value;
        console.log(value || 'Clicked me!');
    });
}
addListenerBtn.addEventListener('click', addListener);