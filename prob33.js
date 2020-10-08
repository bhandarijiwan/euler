/**
 * The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.
 * We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
 * There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.
 * If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
 */

function isNonTrivial(n1, n2) {
  let n1_d0 = n1 % 10;
  let n1_d1 = Math.floor(n1 / 10);

  let n2_d0 = n2 % 10;
  let n2_d1 = Math.floor(n2 / 10);

  if (n1_d0 && n2_d1 && n1_d0 === n2_d1) {
    const a = n1_d1 / n2_d0 === n1 / n2;
    return a;
  }
  return 0;
}
function lct(n, d) {
  let n_a = n;
  let n_d = d;
  let m = Math.min(n_a, n_d);
  for (let i = m; i >= 2; i = i - 2) {
    if (n_a % i === 0 && n_d % i === 0) {
      n_a = n_a / i;
      n_d = n_d / i;
      break;
    }
  }
  return { n: n_a, d: n_d };
}

(function() {
  let denominatorProduct = 1;
  let numeratorProdct = 1;
  for (let i = 11; i < 99; i++) {
    for (let j = i + 1; j < 99; j++) {
      if (isNonTrivial(i, j)) {
        console.log(i, j);
        const l = lct(Math.floor(i / 10), j % 10);
        denominatorProduct *= l.d;
        numeratorProdct *= l.n;
      }
    }
  }
  console.log(lct(numeratorProdct, denominatorProduct).d);
})();
