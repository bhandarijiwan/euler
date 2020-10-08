/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

const isPrime = n => {
  if (n <= 3) {
    return n > 1;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 6; i * i <= n; i = i + 6) {
    if (n % (i - 1) === 0 || n % (i + 1) === 0) {
      return false;
    }
  }
  return true;
};

(function() {
  let a = 600851475143;
  let maxFactor = 2;
  let factor = "";
  for (let i = maxFactor; i * i <= a; i++) {
    if (a % i === 0) {
      const r = a / i;
      if (isPrime(r)) {
        maxFactor = r;
        break;
      }
      a = r;
      i = 2;
    }
  }
  console.log(maxFactor);
})();
