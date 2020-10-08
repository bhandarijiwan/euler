/**
 * We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
 * The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.
 * Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
 * HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
 */

function is9PanDigital(str_n) {
  let a = +str_n;
  let s = 1;
  let c = 0;
  let p = 362880;
  let l = new Array(str_n.length).fill(1);
  while (a > 0) {
    c += 1;
    let r = a % 10;
    s = s * r * l[r - 1];
    l[r - 1] = 0;
    a = Math.floor(a / 10);
  }
  if (c <= 9) {
    return s === p;
  }
  return false;
}

function permutation(s, p, l, sum) {
  if (p.length === l) {
    console.log(p);
    return "";
  }
  for (let i = 0; i < s.length; i++) {
    let ss = `${s.substring(0, i)}${s.substring(i + 1, s.length)}`;
    let pp = `${p}${s.substring(i, i + 1)}`;
    permutation(ss, pp, l);
  }
  return;
}

(function() {
  let l = 123456789;
  let c = 0;

  let product_sets = new Set();

  for (let i = 1; i <= 9; i++) {
    for (let j = 1000; j <= 9999; j++) {
      let p = i * j;
      if (is9PanDigital(`${i}${j}${p}`)) {
        product_sets.add(p);
        console.log(`${i}${j}${p}`);
      }
    }
  }
  for (let i = 10; i <= 99; i++) {
    for (let j = 100; j <= 999; j++) {
      let p = i * j;
      if (is9PanDigital(`${i}${j}${p}`)) {
        product_sets.add(p);
        console.log(`${i}${j}${p}`);
      }
    }
  }
  let finalSum = 0;
  product_sets.forEach(s => {
    finalSum += s;
  });
})();
