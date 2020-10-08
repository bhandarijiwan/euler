/**
 * The following iterative sequence is defined for the set of positive integers:
 * n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
 */
function chain(n) {
  if (n <= 2) {
    return n;
  }
  if (n === 13) {
    return 10;
  }
  if (n % 2 === 0) {
    return chain(n / 2) + 1;
  }
  return chain(3 * n + 1) + 1;
}

(function() {
  let maxChainLength = Number.MIN_SAFE_INTEGER;
  let seed;
  const ceil = 1000000;

  for (let i = 1; i < ceil; i++) {
    const c = chain(i);
    if (c > maxChainLength) {
      maxChainLength = c;
      seed = i;
    }
  }
  console.log(seed);
})();
