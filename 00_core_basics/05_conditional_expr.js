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

const realBooleanValue = !!1; // Type conversion trick

// Default value assignment via OR operator (||)
const name = someInput || 'Rodrigo'; // If someInput is empty, then is falsy, so it would default to 'Rodrigo'
