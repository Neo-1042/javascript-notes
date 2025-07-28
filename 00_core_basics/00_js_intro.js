'use strict'; // Opting out of 'sloppy mode'

/* =============== COURSE CONTENT ===============
    00_CoreBasics => basic syntax, efficient development and debugging, control structures and loops, behind the scenes 
    of JS, functions, DOM manipulation, arrays and iterables, objects.

    01_Building a Strong Foundation => classes and OOP, constructor functions and prototypes, more about DOM & browser APIs,
        events, deep dive into functions, more about numbers and strings, asynchronous code, background HTTP (AJAX).

    02_Advanced concepts => 3rd party libraries, JS modules, tooling (Webpack, Babel, ...), working with browser storage,
        browser support, JS frameworks, meta-programming, NodeJS introduction, security, deployment,
        performance optimizations and memory leaks.
*/

/*
    =============== JavaScript characteristics ===============
    JavaScript is the only language that web browsers actually understand natively.
    It was invented mainly to have dynamic web pages. That is, if I want to get additional information about a concept on my
    HTML-only web page. I don't want to send another request to the web server so that a different page loads.
    This is where JavaScript can come into action. JavaScript code will execute only on the client side (web browser)
    JavaScript code is run by a JavaScript Engine
    Google Chrome = V8 (later used to build Node.js with C++)
    Firefox = SpiderMonkey

    JavaScript is not pre-compiled. Instead, it is parsed and compiled "on the fly"
    Code is evaluated and executed at runtime
    JS is dynamic => Code can change ay runtime (such as types of data)
    JS is weakly typed => data types are assumed, not explicitly defined and can change over the lifetime of the program
        (My personal opinion: this sucks. This is why TypeScript was such a great idea)
*/
// In JavaScript, variables are NOT tied to data types
let myName = "Rodrigo";
myName = 100; // This is stupid, but accepted by JavaScript

/*
    =============== JavaScript vs Node.js ===============

    JS can manipulate HTML and CSS code and send HTTP responses and requests, but it CANNOT interact with the underlying host OS,
    nor can it access the local filesystem.

    Node.js => it is basically the V8 engine written in C++ so that you can run JS code anywhere (for example, on the server
    side, which would be the backend of a web application)

    Node.js is able to interact with the OS and access the local file system, but it CANNOT manipulate HTML or CSS code on the
    client side.

    Java != JavaScript (JavaScript only took its name because of Java's popularity, but they mostly have nothing to do)
*/
/*
    =============== Brief History of JavaScript ===============
    Invented by Brendan Eich. 
    1995 => Netscape introduces Mocha > LiveScript > soon renamed to JavaScript, due to Java's popularity
    1996 => Microsoft releases its own version for IE (annoying overlays and popups)
    Late 1996 => JavaScript was submitted to ECMA (European Computer Manufacturers Association) International to
        start standarization.
    Since 2016, ECMA versions are named by year (e.g. ECMAScript 2023) 

    ECMAScript is a standard. JavaScript is one implementation of ECMAScript. 
    ActionScript and Jscript are other examples.

    Each browser has its own JavaScript engine that defines which features are actually supported.

    Recommendations: Visual Studio Code + Google Chrome (dev tools)
*/

// Default JavaScript behavior:
// The index.html file will be parsed from top to bottom by the browser
/** index.html
 * <head> ... </head>
 * <body>
 *     <script src="calculator.js"></script>
 * </body>
 */