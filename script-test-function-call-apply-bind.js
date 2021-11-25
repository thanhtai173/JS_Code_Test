"use strict";

const VNAirline = {
  airline: "VietNamAirline",
  Code: "VNA",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.Code}${flightNum}`
    );
    this.bookings.push({ flightNum: `${this.Code}${flightNum}`, name });
  },
};

VNAirline.book(1234, "Tai");
VNAirline.book(4567, "Phat");

const VietJetAirline = {
  airline: "VietJet",
  Code: "VJ",
  bookings: [],
};

const NipponAirline = {
  airline: "Nippon",
  Code: "NP",
  bookings: [],
};

// Call method
// book is object and object has method so this function has this method
VNAirline.book.call(VietJetAirline, 230, "Long");
//console.log(VietJetAirline);
// when using call , this keyword in book function can point to VietJetAirline
// when using call , function in one object can point to information of other objects
VNAirline.book.call(NipponAirline, 241, "Kha");

// Apply method - no used in modern Javascript
const flightData = [583, "Loan"];
VNAirline.book.apply(NipponAirline, flightData); // apply using for array
VNAirline.book.call(VietJetAirline, ...flightData); // using call with distructing array

// Bind method
const VJbook = VNAirline.book.bind(VietJetAirline);
const NPbook = VNAirline.book.bind(NipponAirline);
// create new function bind to VietJetAirline
// VJbook is a function of VietJetAirline
VJbook(230, "Long");
NPbook(479, "Tuyen");

const VJbook23 = VNAirline.book.bind(VietJetAirline, 23);
VJbook23("Hai");

VNAirline.planes = 300; // if member does not exist in obj, js will add to obj automatically
VNAirline.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
VNAirline.buyPlane();

document
  .getElementById("buy")
  .addEventListener("click", VNAirline.buyPlane.bind(VNAirline));
// if dont use bind here , JS only call buyPlane but dont know this member belong which obj

const addTax = (rate, value) => {
  //care position of arguments of function
  value + value * rate;
};
const addVat = addTax.bind(null, 0.23); // rate - 0.23
