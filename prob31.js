/**
 * In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
 * 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
 * It is possible to make £2 in the following way:
 * 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 * How many different ways can £2 be made using any number of coins?
 */

function combinationCount(a, b, h) {
  let count = 0;
  for (let i = 1; i < h; i++) {
    let c = h - a * i;
    if (c > 0 && c % b === 0) {
      console.log(`${i}(${a}) ${c / b}(${b})`);
      count += 1;
    }
  }
  return count;
}

function splitMoney(m) {
  let denominations = [1, 2, 5, 10, 20, 50, 100, 200];
  let mInP = Math.floor(m * 100);
  let count = 0;
  for (let i = 0; i < denominations.length; i++) {
    let a = denominations[i];
    if (mInP % a === 0) {
      count += 1;
    }
    let aCount = mInP / a;
    for (let m = i + 1; m < denominations.length; m++) {
      let b = denominations[m];
      let c = combinationCount(a, b, mInP);
      count += c;
    }
  }
  return count;
}

function breakDown(c, s) {
  // console.group(`Breaking down ${s} into denominations of ${c}`);
  if (c.length === 1) {
    if (s % c[0] === 0) {
      // console.groupEnd(`Breaking down ${s} into denominations of ${c}`);
      return 1;
    } else {
      // console.groupEnd(`Breaking down ${s} into denominations of ${c}`);
      return 0;
    }
  }
  let count = 0;
  for (let p = 0; p < c.length; p++) {
    let f = c[p];
    if (s % f === 0) {
      count += 1;
    }

    if (c.length > p + 1) {
      // console.group(`considering f=${f} count=${count} remaining a=${c.slice(p + 1, c.length)}`);
      for (let i = s - f; i > f; i -= f) {
        let d = [];
        let cc = 0;
        for (let j = p + 1; j < c.length; j++) {
          if (i % c[j] === 0) {
            cc += 1;
          }
          if (c[j] < i) {
            d.push(c[j]);
          }
        }
        // console.log(`i = ${i} ${c[p]}(${(s - i) / c[p]}), count =${count}`);
        if (d.length > 1) {
          count += breakDown(d, i);
        } else {
          count += cc;
        }
      }
      // console.groupEnd(`considering f=${f} count=${count} remaining a=${c.slice(p + 1, c.length)}`);
    }
  }

  // console.log(`count=${count}`);
  // console.groupEnd(`Breaking down ${s} into denominations of ${c}`);
  return count;
}

(function() {
  // console.log(breakDown([1, 2, 5, 10, 20, 50, 100, 200], 200));
  console.log(breakDown([1, 2, 5, 10, 20, 50, 100, 200], 20));
  // console.log(breakDown([1, 2, 5, 10], 21));
})();
