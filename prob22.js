/**
 * 
 * Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
 */
const fs = require("fs");

function nameScore(name) {
  let l = name.length;
  let score = 0;
  for (let i = 0; i < l; i++) {
    let c = name.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      c = c + 32;
    }
    score += c - 97 + 1;
  }
  return score;
}

(function() {
  fs.readFile("p022_names.txt", "UTF-8", (err, data) => {
    const d = data
      .replace(/\"/g, "")
      .split(",")
      .sort();
    const totalScore = d.reduce((a, c, index) => a + nameScore(c) * (index + 1), 0);
    console.log(totalScore);
  });
})();
