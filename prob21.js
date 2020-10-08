/**
 * * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
 * The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 * Evaluate the sum of all the amicable numbers under 10000
 */

function sumOfDivisors(n) {
  let sum = n > 1 ? 1 : 0;
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

function isAmicable(n) {
  const d = sumOfDivisors(n);
  const a = sumOfDivisors(d);
  if (a === n && n !== d) {
    return d;
  }
  return 0;
}

(function() {
  let sum = 0;
  for (let i = 1; i <= 10000; i++) {
    let d = isAmicable(i);
    if (d && d <= 10000) {
      sum += d;
    }
  }
  console.log(sum);
  // console.log(isAmicable(20));
  // console.log(sumOfDivisors(220));
})();
