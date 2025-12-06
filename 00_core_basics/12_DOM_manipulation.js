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