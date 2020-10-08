/**
 * The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating
 * them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime.
 * The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.
 * Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime
 *
 */

function isPrime(n) {
  if (n <= 3) {
    return n > 1;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i == 0 || n % (i + 2) === 0) {
      return false;
    }
    i = i + 6;
  }
  return true;
}

function nextPrime(n) {
  for (;;) {
    if (isPrime(++n)) {
      return n;
    }
  }
}

(function() {
  const primeNumbers = [3, 7, 109, 673];
  let currentMaxPrime = primeNumbers[primeNumbers.length - 1];
  let nextMaxPrime;
  while (true) {
    nextMaxPrime = nextPrime(currentMaxPrime);
    const concatResult = primeNumbers.every(p => {
      const addFront = +`${nextMaxPrime}${p}`;
      if (isPrime(addFront)) {
        const addBack = +`${p}${nextMaxPrime}`;
        if (isPrime(addBack)) {
          return true;
        }
      }
      return false;
    });
    if (concatResult) {
      break;
    }
    currentMaxPrime = nextMaxPrime;
  }
  console.log(nextMaxPrime);
});
