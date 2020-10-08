/** Problem 15
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 * How many such routes are there through a 20×20 grid
 */

let grid;
function traverse(i, j, size) {
  if (i === size && j === size) {
    return 1;
  }
  if (grid[i][j]) {
    return grid[i][j];
  }
  let rightPathLength = 0;
  let downPathLength = 0;
  if (j < size) {
    rightPathLength = traverse(i, j + 1, size);
  }
  if (i < size) {
    downPathLength = traverse(i + 1, j, size);
  }
  grid[i][j] = rightPathLength + downPathLength;
  return grid[i][j];
}

(function main() {
  let size = ;
  grid = new Array(size + 1).fill(0).map(() => new Array(size + 1).fill(0));
  console.log(traverse(0, 0, size));
})();
