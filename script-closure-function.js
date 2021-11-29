"use strict";
// Closure function
// A lexical environment also holds a reference to a parent lexical environment
// No closure
const secureBookingNC = function () {
  let passengerCount = 0;
  passengerCount++;
  console.log(`${passengerCount} passengers`);
};

secureBookingNC();
secureBookingNC();
secureBookingNC();
// Closure
const secureBooking = function () {
  //parent scope
  let passengerCount = 0;
  return function () {
    // child scope
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
// The closure means that the environment in secureBooking is finished when
// booker() finishs running but the variable passengerCount still keep the
// "reference" value outer the scope and this value is updated in the next
// run of booker()
