/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */
const isPrime = n => {
  if (n <= 3) {
    return n > 1;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

function check6k_plus_1(n) {
  if (n % 2 === 0 || n % 3 == 0) {
    return false;
  }
  const a = Math.round(n / 6);
  if (a * 6 + 1 === n) {
    return true;
  }
  if (a * 6 - 1 === n) {
    return true;
  }
  return false;
}

(function() {
  let count = 6;
  let maxCount = 10001;
  let base = 13;
  while (count < maxCount) {
    base = base + 2;
    // is of the form 6k+1 or 6k-1
    if (check6k_plus_1(base)) {
      if (isPrime(base)) {
        count += 1;
      }
    }
  }
  console.log(base);
  console.log(isPrime(base));
})();
