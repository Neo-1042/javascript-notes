'use strict';

// If statements return no values
// The ternary operator allows to save the result of a comparisson into a constant or variable
// <condition> ? <true_value> : <false_value>
// Nested ternary operators are allowed, but not recommended


const userName = isLogin ? 'Rodrigo' : 'Not found';

// Examples from the 'monster-app' example
let maxDamage = (mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE );

const logEvent =
    mode === MODE_ATTACK
        ? LOG_EVENT_PLAYER_ATTACK
        : LOG_EVENT_PLAYER_STRONG_ATTACK
;

// LOGICAL OPERATORS. Boolean tricks

// Boolean coercion via:
// Double bang operator !! (-1)*(-1) = +1
// NOT (NOT) Generates a real boolean value

const realBooleanValue = !!1; // Type conversion trick

// Default value assignment via OR operator (||)
const name = someInput || 'Rodrigo'; // If someInput is empty, then is falsy, so it would default to 'Rodrigo'

const nameo = isLoggedIn && 'Master'; // if and only if user is logged in, set 'nameo' to Master

const userInput = ''; // Undefined

let isValidInput = userInput ? true : false ; // Non-empty 'userInput'
// Trick: double bang operator
isValidInput = !!userInput ;  // Real boolean based on whether 'userInput' is false or true.

// Arrays (empty or not) are always treated as 'truthy' values
let shoppingCart = isLoggedIn && ['Books']; // if user is logged in, the shopping cart will contain 'Books'

// Reminder:
let enteredValue = '';
let testValue = enteredValue || 'PLACEHOLDER'; // Since enteredValue is an empty string, testValue will store 'PLACEHOLDER'

testValue = enteredValue || null; // Still, since enteredValue is empty (falsy), testValue will store 'null' (the second value)

enteredValue = 'Max';
testValue = enteredValue && ''; // Stores '', since the first value is "truthy"
///////////////////////////////////////////////////////////////////////////////////////////////////
// SWITCH CASE STATEMENT
///////////////////////////////////////////////////////////////////////////////////////////////////

ev = userInput("Enter a value: ");

switch(ev) {
    case LOG_EVENT_PLAYER_ATTACK:
        logEntry.target = 'MONSTER';
        break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
        logEntry = {
            event: ev,
            value: val,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
}