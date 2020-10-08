/**
 * Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
 */

function sumOfFifthPower() {
  let squares = [0, 1];
  for (let i = 2; i <= 9; i++) {
    squares.push(Math.pow(i, 5));
  }
  let upperLimit = squares[squares.length - 1] * 6;
  let sum = 0;
  for (let i = 2; i <= upperLimit; i++) {
    let n = i;
    let s = 0;
    while (n != 0) {
      s += squares[n % 10];
      n = Number.parseInt(n / 10);
    }
    if (s === i) {
      sum += s;
    }
  }
  return sum;
}

(function() {
  console.log(sumOfFifthPower());
})();
