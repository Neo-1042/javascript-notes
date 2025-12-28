'use strict';

// window.alert("Window alert"); // Same as alert("Window alert");

const h1 = document.getElementById('main-title');

h1.textContent = 'NEW title';
h1.style.color = "white";
h1.style.backgroundColor = 'black';

console.log(window.outerHeight);
console.log(window.outerWidth);

const HEADPHONES = document.getElementsByClassName('list-item'); // Old
const HEADPHONES2 = document.querySelectorAll('.list-item'); // Modern approach

const allListItems = document.querySelectorAll('li'); // NodeList (NON LIVE)
const allListItems2 = document.getElementsByTagName('li'); // Modern approach. (LIVE)

for (const listItem of allListItems2) {
    console.dir(listItem);
}

const input0 = document.querySelector("input");

// Difference between child nodes and child element nodes.

// ul0.children -> gives access to all child element nodes.
//  i.e. only child nodes that correspond to HTML tags (elements)
//       text nodes are EXCLUDED here.
const ul0 = document.querySelector("ul");
console.log(ul0.children[0]);