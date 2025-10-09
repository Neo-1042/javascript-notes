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