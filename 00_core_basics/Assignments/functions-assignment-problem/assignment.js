'use strict';

/* function sayHello(name) {
  console.log('Hi ' + name);
} */
// 1) Arrow function
const sayHello = (name) => {
	console.log('Hello, ' + name);
};
sayHello("Neo");

// 2) Three different syntaxes
const sayHello1 = (phrase, name) => {
	console.log(phrase + ', ' + name);
};
sayHello2("This is Sparta! ", "Luigi");

const sayHello2 = () => {
	console.log("Hello, princess, this is hell");
};
sayHello3();

const sayHello3 = (name) => {
	return "Hello, " + name
}
console.log(sayHello3("Neo"));

// 3) Add a default value for 'phrase' if no value is provided:
const sayHello4 = (name, phrase = 'Default phrase, please, provide one') => {
	console.log(phrase + ', ' + name);
};
sayHello4("Oscar");

// 4) Undefined number of strings
const msg = "Callback function executed correctly";

const checkInput = (cb, ...stringArray) => {

	for (const str of stringArray) {
		if (str.length === 0) {
			alert("ERROR: one of the passed strings is empty!");
		} else {
			console.log(str);
			cb(msg);
		}
		
	}
};

const successFunction = function(msg) {
	alert(msg);
};

checkInput(successFunction, "Hello", "Rua", "Zelda", "Pikachu");