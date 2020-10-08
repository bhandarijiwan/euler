/**
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

 */

let denominations = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred",
  1000: "thousand"
};

let and = "and";
function numberToStr(n) {
  if (denominations[n]) {
    if (n >= 100) {
      return `${denominations[1]}${denominations[n]}`;
    }
    return `${denominations[n]}`;
  }
  let str = "";
  let ones = n % 10;

  if (denominations[ones]) {
    str = `${denominations[ones]}`;
  }

  let tens = Math.floor((n % 100) / 10) * 10;
  if (denominations[tens]) {
    if (n % 100 < 20) {
      tens = n % 100;
      str = `${denominations[tens]}`;
    } else {
      str = `${denominations[tens]}${str}`;
    }
  }
  let hundereds = Math.floor((n % 1000) / 100);
  if (denominations[hundereds]) {
    str = `${denominations[hundereds]}${denominations[100]}${str ? and : ""}${str}`;
  }
  return str;
}

(function() {
  let length = 0;
  for (let i = 1; i <= 1000; i++) {
    let a = numberToStr(i).trim();
    length += a.length;
  }
  console.log(length);
})();
