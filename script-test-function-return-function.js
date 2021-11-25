"use strict";
// Test function returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHello = greet("Hello");
greetHello("Girls");
greetHello("Boys");

greet("Hello")("Tai");
