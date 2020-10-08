/**
 * 
 * The Fibonacci sequence is defined by the recurrence relation:
Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 */

function Add(strA, strB) {
  let m = strA.length > strB.length ? strA.length : strB.length;
  let num1 = `${"0".repeat(m - strA.length)}${strA}`;
  let num2 = `${"0".repeat(m - strB.length)}${strB}`;
  let sum = "";
  let c = 0;
  for (let l = m - 1; l >= 0; l--) {
    let n1 = +num1.charAt(l);
    let n2 = +num2.charAt(l);
    let s = n1 + n2 + c;
    c = s >= 10 ? 1 : 0;
    sum = `${s % 10}${sum}`;
  }
  return c ? `${c}${sum}` : sum;
}

(function() {
  let a = "0";
  let b = "1";
  let count = 1;
  while (b.length < 1000) {
    let c = Add(a, b);
    a = b;
    b = c;
    count += 1;
  }

  console.log(b.length);
  console.log(count);
})();
