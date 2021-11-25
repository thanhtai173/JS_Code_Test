"use strict";

// Test Callback function
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" "); // destructuring array
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  // fn in here is callback function
  console.log(`Original string: ${str}`);
  console.log(`Transform string: ${fn(str)}`);
  console.log(`Transform by: ${fn.name}`);
};

transformer("Javascript is the best", upperFirstWord);
transformer("Javascript is the best", oneWord);
