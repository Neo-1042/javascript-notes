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