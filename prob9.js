/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a2 + b2 = c2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

const isPythagoreanTriplet = (a, b) => {
  const p = a * a + b * b;
  const c = Math.sqrt(p);
  if (Number.isInteger(c)) {
    if (p === c * c) {
      return c;
    }
  }
  return 0;
};

(function() {
  let a,
    b,
    c,
    count = 0;
  for (let i = 1; i < 1000; i++) {
    for (let j = i + 1; j < 1000; j++) {
      const k = isPythagoreanTriplet(i, j);
      if (k > 0) {
        if (i + j + k === 1000) {
          a = i;
          b = j;
          c = k;
          count += 1;
        }
      }
    }
  }
  console.log(count);
  console.log(a, b, c);
  console.log(a * b * c);
})();
