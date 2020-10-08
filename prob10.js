/**The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million. */

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

(function() {
  const ceil = 2000000;
  let sum = 2 + 3;
  for (let i = 5; i <= ceil; i = i + 6) {
    if (isPrime(i)) {
      sum += i;
    }
    if (isPrime(i + 2)) {
      sum = sum + i + 2;
    }
  }
  console.log(sum);
})();
