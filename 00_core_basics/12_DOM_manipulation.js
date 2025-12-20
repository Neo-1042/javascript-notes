'use strict';

/*
Interacting with the HTML Page
Exploring the DOM

Module Content:
- HTML, DOM and JavaScript
- Nodes and Elements
- Querying DOM Nodes & Traversing the DOM
- Evaluating & Manipulating DOM Nodes
- Creating & Removing DOM Nodes
*/

/*
What is the DOM?
DOM = Document Object Model.

*Note: the DOM is not strictly tied to browsers. There are other tools that can
parse HTML (e.g. PHP, Python, NodeJS)

Recall: JavaScript is a hosted language, that is, the engine is hosted
in the browser (V8, for example).

The browser parses and renders the provided HTML file, while the browser
provides the runtime for the JavaScript code, as well as exposes
Web APIs to allow JS to work with the parsed HTML document.
This functionality encompasses the DOM. The browser will represent
all of the objects of the rendered HTML code as DOM objects, which can
be accessed by Javascript:
*/
const titleEl = document.querySelector('h1');

/*
The DOM exposes 2 main kinds of global objects:

1] document
    Root DOM Node

2] window
    Reflects the active browser window or tab
    Acts as a global storage for the script
    Provides access to window-specific properties and methods.
*/

// Access the real JavaScript object for 'document'
console.dir(document);

/* The browser will parse the HTML document and create an object representation
of all the elements (tags) in said document. This is the DOM.

All of the HTML elements (tags) are translated into element nodes, thereby getting
a TREE of NODES.

Tag ---> Element Node
White space or text ---> Text Node
*/

// $0 always gives you access to the last element you selected in the "Elements" tab using the DEV tools

/* <h1>This tag will be stored in the DOM like so:</h1>
h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    ...
*/
// * Note: you can directly modify the text of some element in the browser, and the change will be shown,
// but this does NOT mean that the HTML code will change. These changes are temporary.
///////////////////////////////////////////////////////////////////////////////
// QUERYING ELEMENTS (NODES) FROM THE DOM WITH JAVASCRIPT

// document.querySelector(); -> Querying by CSS selector, 
// document.getElementById(); -> Querying by ID
// document.querySelectorAll(); -> Multiple
// document.getElementsByTagName(); -> Multiple
// document.getElementsByClassName(); -> Old, but still used

// A direct reference to DOM element is returned
// ------------------------------------------------------------------------- //
/* Difference between NODE and ELEMENT (ELEMENTS \subset NODES)
Every item in the DOM is a node.
We have: element, text and attribute nodes.

Elements are one type of nodes. 
Elements are actually nodes that are created directly from HTML tags,
not from the text.

Elements have special properties and methods.
*/ 
// <h1 id="main-title">Dive into the DOM!</h1>
const MAIN_TITLE = document.getElementById("main-title");
console.dir(MAIN_TITLE);

// Display information of a child node of some element
console.log(MAIN_TITLE.some_child_node);

const HEADPHONES = document.getElementsByClassName('list-item'); // Old

// document.querySelector(); -> More modern approach
// CSS
// .class-name
// #id_name

// querySelector(); -> Returns only the FIRST matching item
const HUAWEI_FREE_BUDS_PRO_4 = document.querySelector('.list-item');

// querySelectorAll(); -> Returns a NODE LIST of all the matched items
const HEADPHONES2 = document.querySelectorAll('.list-item');

let SINGLE_HEADPHONE = document.querySelector('ul li:first-of-type');
SINGLE_HEADPHONE = document.querySelector('ul li:last-of-type');

// ------------------------------------------------------------------------- //
// Live vs non-live NodeList

// document.querySelectorAll(); -> returns NON LIVE
// document.getXByY(); returns LIVE
// ------------------------------------------------------------------------- //

/*
The foundational concept of DOM manipulation is that JavaScript allows you to
manipulate the information in the rendered HTML page without loading it again,
that is, without requesting the server a different version of the current page.

[+] Add Event Listeners

[+] Highly Dynamic, faster and better UX

*/

/*
HTML Reminder: load your JavaScript script RIGHT AFTER the whole HTML document
has been initially parsed, like so: (DEFER means: "download the JavaScript
early, but only run it once you are done with parsing the HTML page")

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>DOM Interaction</title>
  <script src="app.js" defer></script>
        <!-- To avoid querying for NODES that do not yet exist -->
</head>

*/

// CSS Pseudo-selector:
const SECOND_LIST_ITEM = document.querySelector("ul li:nth-of-type(2)");

/*
SUMMARY: Node Query Methods

Note: You can only query for element nodes (reminder: element nodes \subset nodes )

document.body => Selects the <body></body> element node.
document.head => Selects the <head></head> element node.
document.documentElement => Selects the <html></html> element node

QUERY METHODS:
*/
const SOME_CSS_SELECTOR = "#some-id";
document.querySelector(SOME_CSS_SELECTOR); // e.g. #some-id, .some-class or divp.some-class

const ANOTHER_CSS_SELECTOR = ".some-class";
document.querySelectorAll(ANOTHER_CSS_SELECTOR); // e.g. #some-id, .some-class or divp.some-class
// Returns all matching DOM elements as a static (non-live) NodeList.

const SOME_ID = "main-header";
document.getElementById(SOME_ID); // The same id should NOT occur more than once in your HTML document

const SOME_CSS_CLASS = "some-class";
document.getElementsByClassName(SOME_CSS_CLASS); // Live collection

const SOME_HTTP_TAG = "p";
document.getElementsByTagName(SOME_HTTP_TAG); // Live collection
///////////////////////////////////////////////////////////////////////////////////////////////////
// EVALUATING & MANIPULATING DOM ELEMENTS
// These changes are only stored in memory; they are not changed in the HTML nor the CSS code.

<p id="welcome-text" class="text-default">Welcome!</p>

const h1 = document.querySelector("h1");
const p = document.getElementById("welcome-text");
// READ PROPERTIES
console.log(p.textContent);
console.log(p.id);
console.log(p.className);

// MODIFY PROPERTIES
p.className = "new-class"
h1.textContent = "New DOM"; 
h1.style.color = "green";
h1.style.backgroundColor = "blue";
///////////////////////////////////////////////////////////////////////////////////////////////////
// ATTRIBUTES VS PROPERTIES
// Live Synchronization

// Often (but not always), attributes are mapped to properties and "live synchronization" is set up.

<input id="input-1" class="input-default" value="Enter text..."></input>

const input0 = document.getElementById("input-1");
/* Attribute (of a tag) => What you actually add in the HTML code
To  each attribute there will be a DOM property assigned to it.

input0.id        ---> 1:1 mapping + live-sync
input0.className ---> Different names, but live sync ('class' vs 'className')
input0.value     ---> 1:1 mapping, but only 1-way live sync (ATTRIBUTE -> property)
*/
<input type="text" id="text2" value="default text"></input>
const input2 = document.getElementById("text2");

input2.value = "Hello, new text"; // This text will not be changed as an attribute, only as a property

// However, if you DO want to change the ATTRIBUTE:
input2.setAttribute('value', 'NEW_VALUE');
console.log(input2.value);
///////////////////////////////////////////////////////////////////////////////////////////////////
