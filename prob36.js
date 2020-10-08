/**
 * The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
 */

function getBinary(n) {
  return n.toString(2);
}

function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;
  while (j > i) {
    if (s.charAt(i++) !== s.charAt(j--)) {
      return false;
    }
  }
  return true;
}

(function() {
  let sum = 0;
  let count = 0;
  for (let i = 1; i <= 1000000; i += 1) {
    if (isPalindrome(i.toString(10))) {
      const bi = getBinary(i);
      if (isPalindrome(bi)) {
        sum += i;
      }
    }
  }
  console.log(sum);
})();
