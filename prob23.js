/**
 *A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
 A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

 As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
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

function isAbundant(n) {
  if (sumOfDivisors(n) > n) {
    return true;
  }
  return false;
}

(function() {
  const start = 12;
  const CEIL = 28123;
  let maxSum = start;
  let prevMax = start;
  let abundants = [];
  let sum = 0;
  let summed = {};
  for (let i = start; i <= CEIL; i++) {
    if (isAbundant(i)) {
      abundants.push(i);
      for (let j = 0; j < abundants.length; j++) {
        let r = abundants[j] + i;
        if (r <= CEIL && !summed[r]) {
          summed[r] = true;
          sum += r;
        }
      }
    }
  }
  let totalSum = (CEIL * (CEIL + 1)) / 2;
  console.log(totalSum - sum);
})();
