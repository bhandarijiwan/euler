/**
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 * and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 * Find the sum of the digits in the number 100!
 */

function Add(strNum1, strNum2) {
  let l = strNum1.length > strNum2.length ? strNum1.length : strNum2.length;
  let c = 0;
  let sum = "";
  let num1 = `${"0".repeat(l - strNum1.length)}${strNum1}`;
  let num2 = `${"0".repeat(l - strNum2.length)}${strNum2}`;
  for (let i = l - 1; i >= 0; i--) {
    let a = +num1.charAt(i);
    let b = +num2.charAt(i);
    let s = a + b + c;
    let q = s % 10;
    c = s > 9 ? 1 : 0;
    sum = `${q}${sum}`;
  }
  return c ? `${c}${sum}` : `${sum}`;
}

function mult(strNum, factorStr) {
  let l = factorStr.length;
  let m = "";
  for (let i = l - 1, p = 0; i >= 0; i--) {
    let a = +factorStr.charAt(i);
    let c = 0;
    let ss = "";
    for (let k = strNum.length - 1; k >= 0; k--) {
      let b = +strNum.charAt(k);
      let s = a * b + c;
      let q = s % 10;
      c = Math.floor(s / 10);
      ss = `${q}${ss}`;
    }
    ss = `${ss}${"0".repeat(p++)}`;
    ss = c ? `${c}${ss}` : ss;
    m = Add(ss, m);
  }
  return m;
}

function factorial(n) {
  let f = "1";
  for (let i = 1; i <= n; i++) {
    f = mult(f, `${i}`);
  }
  return f;
}

(function() {
  let f = factorial(100);
  let sumOfDigits = f.split("").reduce((a, c) => a + +c, 0);
  console.log(sumOfDigits);
})();
