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
