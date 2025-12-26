'use strict';

// Task 1: set the first task's background-color to black and text-color to white:
// const firstTask = document.getElementById('task-1'); // OK
// const firstTask = document.querySelector('#task-1'); // OK
const firstTask = document.querySelector('ol li:nth-of-type(1)'); // Nice
firstTask.style.backgroundColor = "black";
firstTask.style.color = "white";

// Task 2: Change the document title in (<head></head>) to "Assignment - Solved!"
// Use 2 different ways to access the <title> element: 
// via querySelector() on document and
// via querySelector() on certain property you find in document.
const myTitle1 = document.querySelector('title').textContent;
const myTitle2 = document.title;

console.log("Title1 before changing : " + myTitle1);
console.log("Title2 before changing : " + myTitle2);

document.querySelector('title').textContent = "Assignment - Solved!";
const newTitle = document.querySelector('title').textContent;
console.log("Title1 after changing: " + newTitle);

document.title = "Assignment - Solved! 2nd version";
const newTitle2 = document.querySelector('title').textContent;
console.log("Title2 after changing: " + newTitle2);

// Task 3: Select the <code>&lt;h1&gt;</code> element on this page and change its
// text to "Assignment - Solved!"

document.querySelector('h1').textContent = "Assignment SOLVED, nice";



console.log("THE END");