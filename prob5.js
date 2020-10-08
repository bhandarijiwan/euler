/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

(function() {
  // 20 -> 10 * 2 -> 5 * 2 * 2
  // 19 -> 19
  // 18 -> 18 -> 9 * 2 -> 3 * 3 *2
  // 17 -> 17
  // 16 -> 8 * 2 -> 4 * 2 * 2
  // 15 -> 5* 3
  // 14 -> 7 * 2
  // 12 -> 6 * 2
  // 11 -> 11
  const numbersToCheck = [20, 19, 18, 17, 16, 15, 14, 13, 11];
  let i = 2520 / 20;
  let newNumber;
  while (true) {
    newNumber = i * 20;
    const divisibleByAll = numbersToCheck.every(num => {
      return newNumber % num === 0;
    });
    if (divisibleByAll) {
      break;
    }
    i += 1;
  }
  console.log(newNumber);
})();
