"use strict";
// Reference of RegExp
/*
// https://www.vogella.com/tutorials/JavaRegularExpressions/article.html#:~:text=Regex%20examples%20A%20simple%20example%20for%20a%20regular,it%20would%20match%2C%20for%20example%2C%20%22a%22%20or%20%221%22.
const REGEXP = /\d{2}\:\d{2}/;
const string = "This room 123:304 is too dark 23:00";
const updatestring = string.replace(REGEXP, "00:00");
console.log(updatestring);
*/

/*
function timeForMilkAndCookies(date) {
  const day = date.getDate();
  const month = date.getMonth();
  if (day === 24 && month === 11) return true;
  else return false;
}
const a = timeForMilkAndCookies(new Date(2013, 11, 25));
*/

/* Check lowercase in text
const a = "ghBHJKBJBabababKJKJJKJL";
const arr = [...a];
let a2 = "";
for (const i of arr) {
  if (i !== i.toUpperCase()) {
    a2 = a2 + i;
  }
}
console.log(a2);
*/

/* Hex to Binary
function toBinary(num) {
  // Javascript auto change hex to decimal -> num is decimal
  let newBinary = "";
  let temp = num;
  let redtemp = 0;
  const arrredtemp = [];
  while (temp >= 2) {
    redtemp = temp % 2;
    temp = Math.trunc(temp / 2);
    arrredtemp.push(redtemp);
    console.log(arrredtemp);
  }
  arrredtemp.push(temp);
  for (let i = 0; i < arrredtemp.length; i++)
    newBinary = newBinary + arrredtemp[arrredtemp.length - i - 1];
  return newBinary;
}
const a = toBinary(0xfa);
console.log(a);
*/

/* Arrange object inside arrays 
const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "lemon", price: 30 },
  { name: "apple", price: 60 },
  { name: "grape", price: 40 },
];

function sortDrinkByPrice(drinks) {
  // drinks is array
  let newdrinks = drinks;
  let temp;
  for (let i = 0; i < newdrinks.length - 1; i++) {
    for (let j = i + 1; j < newdrinks.length; j++) {
      if (drinks[j].price < newdrinks[i].price) {
        temp = newdrinks[j];
        newdrinks[j] = newdrinks[i];
        newdrinks[i] = temp;
      }
    }
  }
  return newdrinks;
}
const a = sortDrinkByPrice(drinks);
console.log(a);
*/

/* Bitwise
function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

console.log(bitwiseAND(7, 12)); // 4

console.log(bitwiseOR(7, 12)); // 15

console.log(bitwiseXOR(7, 12)); // 11
*/
