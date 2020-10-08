/**
 * A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 */

/**
 * Find Recurring cycles in a string
 * @param {*} str
 */
function findRecurringCycle(s) {
  let stringS = `${s}`;
  let dotIndex = stringS.indexOf(".");
  let str = stringS.substring(dotIndex + 1, s.length);
  str = str.replace(/^0+/, "");
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let ss = str.substring(i, j + 1);
      let l = ss.length;
      let ssCount = 0;
      let cs = "";
      for (k = j + 1; k < str.length; k = k + l) {
        cs = str.substring(k, k + l);
        if (cs !== ss) {
          cs = "";
          ssCount = 0;
          break;
        }
        ssCount += 1;
      }
      if (ssCount && cs) {
        return cs;
      }
    }
  }
  return "";
}

/**
 * Naive string matching
 * @param {N} a
 * @param {*} b
 */

function divide(a, b, p) {
  let q = "";
  let c = 0;
  let r = a;
  while (c <= p && r > 0) {
    let d = r - b;
    if (d < 0) {
      if (c < 1) {
        q = "0.";
      } else {
        q = `${q}0`;
      }
      r = r * 10;
    } else {
      let rem = d % b;
      if (rem === 0) {
        q = `${q}${d / b}`;
        break;
      } else {
        let o = (r - rem) / b;
        q = `${q}${o}`;
        r = rem * 10;
      }
    }
    c += 1;
  }
  return q;
}

(function() {
  let maxN = 0;
  let maxRecurring = "";
  for (let i = 2; i < 1000; i++) {
    let r = findRecurringCycle(divide(1, i, 12));
    if (r.length > maxRecurring.length) {
      maxRecurring = r;
      maxN = i;
    }
  }
  console.log(divide(1, 7, 20));
  console.log(maxN, maxRecurring, maxRecurring.length);
})();
