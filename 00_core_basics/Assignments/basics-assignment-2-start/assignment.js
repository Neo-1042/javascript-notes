'use strict';

const task3Element = document.getElementById('task-3');

// Exercise 1: create two new functions
function first() {
    alert("First function");
}
function second(myName) {
    alert("Hello, " + myName);
}

// Exercise 2: call both functions directly
first();
second("Neo");

// Exercise 3: add an event listener to task3Element and attach it to the first function.
task3Element.addEventListener("click", first);

// Exercise 4: create a third function that accepts three strings and returns the concatenation
function concatThree(name1, name2, name3) {
    return name1 + name2 + name3;
}
// Exercise 5: call the new function directly from your code and alert() the result:
alert(concatThree("This", " is ", "Trinity"));