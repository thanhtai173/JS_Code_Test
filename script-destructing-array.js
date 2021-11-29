"use strict";
const Home = {
  name: "CTT",
  location: "Xa Phuoc Kieng, Huyen Nha Be",
  rooms: ["BedRoom", "LivingRoom", "BathRoom", "Kitchen"],
  people: ["CVT", "TTH", "CHT"],
  role: ["Father", "Mother", "Brother"],

  order: function (starterIndex, mainIndex) {
    return [this.rooms[starterIndex], this.rooms[mainIndex]];
  },
};

// Destructing Array

//const [First, Second] = Home.rooms;
//console.log(First, Second);

//const [First, , Second] = Home.rooms;
//console.log(First, Second);

// Swap elements in array
//let [First, Second] = Home.rooms;
//console.log(First, Second);
//[Second, First] = [First, Second];
//console.log(First, Second);

//const [First, Second] = Home.order(1, 0);
//console.log(First, Second);

const nested = [2, 4, [5, 6]];
const [i, , [j, k], g = 1] = nested;
console.log(i, j, k, g);
