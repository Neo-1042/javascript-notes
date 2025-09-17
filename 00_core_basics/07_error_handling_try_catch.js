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

    if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
        throw {message: "Invalid user input, not a number"};
    }

    return parsedValue;
}

let chosenMaxLife = getMaxLifeValue();
