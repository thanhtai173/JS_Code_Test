"use strict";
// Closure function
// A lexical environment also holds a reference to a parent lexical environment
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
// The closure means that the environment in secureBooking is finished when
// booker() finishs running but the variable passengerCount still keep the
// "reference" value outer the scope and this value is updated in the next
// run of booker()
