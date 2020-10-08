/**
 *
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPalindrome(number) {
  const str = `${number}`;
  let left = 0;
  let right = str.length - 1;
  while (right > left) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    right -= 1;
    left += 1;
  }
  return true;
}

function maxPalindrome(max, min) {
  let maxPalindrome = 0;
  let maxJ = 0;
  let maxI = 0;

  for (let i = max; i >= min; i--) {
    for (let j = i; j >= min; j--) {
      if (i < maxJ) {
        return maxPalindrome;
      }
      const c = j * i;
      if (isPalindrome(c) && c > maxPalindrome) {
        maxPalindrome = c;
        maxI = i;
        maxJ = j;
      }
    }
  }
  return maxPalindrome;
}

(function() {
  let max = 999;
  let min = 100;
  console.log(maxPalindrome(max, min));
})();
