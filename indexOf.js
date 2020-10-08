function prefixSuffixTable(n) {
  let pos = 1;
  let cnd = 0;
  let T = new Array(n.length + 1);
  T[0] = -1;
  while (pos < n.length) {
    if (n.charAt(pos) === n.charAt(cnd)) {
      T[pos] = T[cnd];
    } else {
      T[pos] = cnd;
      cnd = T[cnd];
      while (cnd >= 0 && n.charAt(pos) !== n.charAt(cnd)) {
        cnd = T[cnd];
      }
    }
    pos += 1;
    cnd += 1;
  }
  T[pos] = cnd;
  return T;
}
function indexOf(h, n) {
  let a = prefixSuffixTable(n);
  console.log(a);
}

indexOf("hello", "ABACABABA");
