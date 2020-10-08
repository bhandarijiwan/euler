/**215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 21000? */
const mult = (str, factor) => {
  let result = "";
  let carry = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    const d = +str.charAt(i);
    let p = d * factor;
    p = carry ? p + carry : p;
    let s = p % 10;
    result = `${s}${result}`;
    if (p < 10) {
      carry = 0;
    } else {
      carry = 1;
    }
  }
  if (carry) {
    result = `${carry}${result}`;
  }
  return result;
};

(function() {
  let b = "2";
  for (let i = 2; i <= 1000; i++) {
    b = mult(b, 2);
  }
  console.log(b.split("").reduce((a, c) => a + +c, 0));
})();
