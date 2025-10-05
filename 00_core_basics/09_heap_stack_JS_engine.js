'use strict';

// How Code Gets Executed by the JavaScript Engine?

// Reminder: Google Chrome = V8; Firefox = SpiderMonkey

/*
We have 2 main areas in the JavaScript Engine 

1] HEAP (montículo) -> Memory allocation. The heap stores data in your system memory.
The heap manages access to this stored information.

2] STACK (pila) -> Execution context. The stack manages your program flow, that is,
the calls to functions().
*/

function getName() {
    return prompt('What is your name?', '');
}


function greet() {
    const userName = getName();
    console.log("Hello, " + userName);
}

greet();

/*
The functions themselves are stored in the HEAP.
When the script runs, the STACK gets activated. The JavaScript engine "pushes" stuff into the stack area.
The whole script is associated with an anonymous function, since this code is not in any function body in principle.

STACK (abstract data structure) -> The top most element is the one that gets executed first
(LIFO = last in, first out)

* Reminder: JavaScript is single-threaded
*/

// STACK
// prompt()
// getName() ....... getName()
// greet()   ....... greet()   ....... greet()
// (anonymous) ..... (anonymous) ..... (anonymous) ..... (anonymous)

// Note: You can access the Call Stack on your DevTools > Sources > app.js > Call Stack section

/*
Modern browsers' feature => EVENT LOOP (we will see more on this later )
Asynchronous code (Event Listeners)

JavaScript Engine = HEAP + STACK
Browsers => Adds the EVENT LOOP. The Browser "pings" the JS Engine whenever a new event is triggered.

Now, you could split the JavaScript  source code into two pieces:

1] The JavaScript core syntax 
    Does not know anything about the DOM, for example

2] Browser APIs
    Responsible for exposing the DOM API which you can access from inside your source code

The TC39 = ECMA International Technical Committee 39 is responsible for advancing the
JS language specification, adding keywords such as 'let' and 'const'.

Additionally, there is a group called "WHATWG" that works on browser APIs.
*/