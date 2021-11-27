"use strict";
// Code only run once and never be able to be called latere
const runOnce = function () {
  console.log("This will never run again");
};
// Immidiately invoked function expressions
(function () {
  console.log("This will never run again");
  const isPrivate = 23; // this variable is private in this scope
})(); // need () to run this function

(() => {
  console.log("This will also never run again");
})();
