/**
 * 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
 * Find the sum of all numbers which are equal to the sum of the factorial of their digits.
 * Note: as 1! = 1 and 2! = 2 are not sums they are not included.
 */

function factorialArrayTillN(n) {
  let f = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] * i;
  }
  return f;
}

function sumOfDigitsFactorial(n, fa) {
  let a = n;
  let s = 0;
  while (a > 0) {
    let d = a % 10;
    s += fa[d];
    a = Math.floor(a / 10);
  }
  return s;
}

(function() {
  let fa = factorialArrayTillN(9);
  let s = 0;
  for (let i = 3; i < 99999; i++) {
    if (i === sumOfDigitsFactorial(i, fa)) {
      s += i;
    }
  }
  console.log(s);
})();
