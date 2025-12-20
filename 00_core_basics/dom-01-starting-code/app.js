'use strict';

// window.alert("Window alert"); // Same as alert("Window alert");

console.log(window.outerHeight);
console.log(window.outerWidth);

const HEADPHONES = document.getElementsByClassName('list-item'); // Old

const HEADPHONES2 = document.querySelectorAll('.list-item'); // Modern approach

const input0 = document.querySelector("input");