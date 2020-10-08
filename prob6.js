/**
 *
 */

(function() {
  const i = 1;
  const n = 100;
  const sum = ((n + 1) * n) / 2;
  const squareOfSum = sum * sum;
  //
  let sumOfSquares = 385;
  for (let i = 11; i <= 100; i++) {
    sumOfSquares += i * i;
  }
  console.log(squareOfSum - sumOfSquares);
})();
