"use strict";

/*
SECTION 6: More on functions

- Different Ways of Creating Functions
- Anonymous Functions
- Callback Functions
- Functions inside Functions
- Default Arguments
- The Rest Operator
- bind()
*/

/* Reminder:

Functions are like "code on demand"
Variables and constants created in functions belong to that function
Functions CAN take parameters (arguments) and CAN return a value
Functions can be called multiple times with different arguments
Functions can be called directly or indirectly (event listeners)

*/
//-----------------------------------------------------------------------------
// PARAMETERS vs ARGUMENTS

// Parameters are variables which you specify between parentheses when defining a function:
function sayHi(name1, age1) {
    // name1 and age1 are parameters
}

// Arguments refer to the concrete values you pass to a function when calling that function:
sayHi('Rodrigo', 29);
//-----------------------------------------------------------------------------
// FUNCTIONS vs METHODS

// Methods are functions that are part of a JavaScript object
const objeto1 = {
    propiedad : "Ditto"
    , accion : function poder() {
        console.log("Ditto se transforma en cualquier pokémon");
    }
}

const person = {
    greet: function greet() {
        console.log("This is a function stored inside an object :O");
    }
};

person.greet();

// Functions themselves are a special kind of OBJECTS :O
// As such, functions are stored in the HEAP
console.dir(greet);
//-----------------------------------------------------------------------------
// Storing (assigning) functions() in constants and variables

let myFunction = function () { // anonymous functions
    console.log("Function stored inside a variable");
};

myFunction();
//-----------------------------------------------------------------------------
// Function declaration/statement
function multiply(a,b) {
    return a*b;
}
// Hoisted to the top. It can be declared anywhere in the file
// Even after it has been called (I don't like this. Hippy language)


//-----------------------------------------------------------------------------
// Function Expression
// Better approach, since it forces you to declare functions before calling them
const multiply = function(x,y) {
    return x*y;
}
// Hoisted to the top, but no initialized/defined. 
// It cannot be declared anywhere in the file.
//-----------------------------------------------------------------------------
// ANONYMOUS FUNCTIONS

// If you only need your function in a single place, you might prefer to use
// an anonymous function.

const someButton = document.getElementById('some-button');

someButton.addEventListener('click', function() {
    console.log("This is an anonymous function");
});

// ARROW FUNCTION SYNTAX
const arrowSum = (a,b) => {
    return a+b;
};