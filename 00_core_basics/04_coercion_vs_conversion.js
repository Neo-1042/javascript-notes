'use strict';
// Beyond true / false, "Truthy" and "Falsy" values
// (Really, JavaScript? Come on ...)

const nameInput = 'Rafa'; // This is a string, not a boolean, but it can be coerced into a boolean

if (nameInput) {
    console.log("Non-empty string is coerced into to TRUE");
}

// JavaScript tries to COERCE values to a Boolean value if a Boolean is required

// 0                    => FALSE
// ANY other number     => TRUE
// "" (empty string)    => FALSE
// Non-empty string     => TRUE
// ALL OBJECTS          => TRUE (stupid, in my opinion)
// null, undefined, NaN => FALSE

const str1 = "FALSE"; // This will be coerced into TRUE if evaluated

// COERCION vs CONVERSION in JavaScript
// In this context, 'coercion' means 'convert without actually converting' data types