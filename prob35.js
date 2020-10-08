/**
 * The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
 * How many circular primes are there below one million?
 */

function rotations(n) {
  let j = `${n}`.length;
  let num = n;
  let r = new Array(j).fill(0);
  for (let i = 1; i <= j; i++) {
    let d = num % 10;
    let o = [];
    for (let k = 0; k < j; k++) {
      r[k] += d * Math.pow(10, (k + i) % j);
    }
    num = Math.floor(num / 10);
  }
  return new Set(r);
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
  let count = 13;
  for (let i = 101; i <= 1000000; i += 2) {
    let allRotations = Array.from(rotations(i));
    if (allRotations.every(r => isPrime(r))) {
      count += 1;
    }
  }
  console.log(count);
})();
