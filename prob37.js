/**
 * The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.
 * Find the sum of the only eleven primes that are both truncatable from left to right and right to left.\
 * NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
 */

function truncateLeft(n) {
  let a = n;
  let r = [];
  while (a > 0) {
    r.push(a);
    a = Math.floor(a / 10);
  }
  return r;
}

function truncateRight(n) {
  let s = [];
  let i = 1;
  let j = 1;
  while (i <= n) {
    i = Math.pow(10, j);
    s.push(n % i);
    j += 1;
  }
  return s;
}

function isPrime(n) {
  if (n <= 3) {
    return n > 1;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

(function() {
  let count = 11;
  let sum = 0;
  let i = 19;
  while (count > 0) {
    i += 2;
    while (true) {
      if (isPrime(i)) {
        let left = truncateLeft(i);
        let leftAllPrime = left.every(a => isPrime(a));
        if (leftAllPrime) {
          let right = truncateRight(i);
          let rightAllPrime = right.every(a => isPrime(a));
          if (rightAllPrime) {
            sum += i;
            break;
          }
        }
      }
      i += 2;
    }
    count -= 1;
  }
  console.log(sum);
})();
