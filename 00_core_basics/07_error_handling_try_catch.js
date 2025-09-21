'use strict';

/*
Some errors cannot be avoided. For example:
User input errors, network errors, etc.
However, you can THROW and CATCH ERRORS to fail gracefully or recover if possible.

ERROR HANDLING: parseInt() does NOT generate error codes, so you need to find another
way to handle errors.

To make use of the try-catch statement, I need to have a real error. 

You may have big applications that span over many files, so, instead of having
multiple if statements, you can use these error management tools.

MAIN IDEA: throw your own type of error.

*/

// You can throw a number, a string or an object as an ERROR.
// Most errors are objects that have a message property.
function getMaxLifeValue() {

    const enteredValue = prompt("Max life for you and the monster");
    const parsedValue = parseInt(enteredValue);

    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw {message: "Invalid user input, not a number"};
    }

    return parsedValue;
}
/*
You may enclose your whole script inside a try block to try and catch any error
This is NOT a good idea. Not good for performance.

You only want to enclose code into a try-catch statement where you have code that might
give rise to errors you CAN NOT CONTROL.

try {
    // I cannot control possible errors in here, such as user input
}
*/

try {
    chosenMaxLife = getMaxLifeValue();
} catch (error) {
    console.log(error);
    chosenMaxLife = 100; // Fall-back logic
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// FINALLY
try {
    // Possible throw {message : 'ERROR'} thrown
} catch (error) {
    console.log(error);
    // Fall-back logic
    // Catch the error so that it does not remain thrown
    throw error; // Re-throw the error (advanced)
} finally {
    // This code will always execute, regardless of having errors or not
}
// try-catch-finally will also be important for NETWORK REQUESTS.

// End of LOOPS and CONTROL STRUCTURES in JavaScript
///////////////////////////////////////////////////////////////////////////////////////////////////