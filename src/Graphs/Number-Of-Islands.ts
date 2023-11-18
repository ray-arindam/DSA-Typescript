class Solution {
  // Function to find the number of islands.
  bfs(
    visited: boolean[][],
    grid: number[][],
    queue: number[][],
    n: number,
    m: number
  ) {
    const [row, col] = queue.shift() || [];
    /**
     *  [0, 1, 0],
        [0, 0, 0],
        [1, 1, 0],
        [1, 0, 1],
        [0, 1, 1],
        [1, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
        [0, 1, 0],
     */
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          +row + i >= 0 &&
          +row + i < n &&
          +col + j >= 0 &&
          +col + j < m &&
          !visited[+row + i][+col + j] &&
          grid[+row + i][+col + j]
        ) {
          queue.push([row + i, col + j]);
          visited[row][col] = true;
        }
      }
    }
  }

  numIslands(grid: number[][]) {
    // code here
    const [n, m] = [grid?.length, grid[0]?.length];
    let counter = 0;
    const queue = [];
    const visited = Array(n)
      .fill(null)
      .map(() => Array(m).fill(false));

    for (let row = 0; row < n; row++) {
      for (let col = 0; col < m; col++) {
        if (+grid[row][col] === 1 && !visited[row][col]) {
          queue.push([row, col]);
          visited[row][col] = true;
          counter++;
          while (queue.length > 0) {
            this.bfs(visited, grid, queue, n, m);
          }
        }
      }
    }
    return counter;
  }
}

const data = [
  [0, 1, 0],
  [0, 0, 0],
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
  [0, 1, 0],
];
const object = new Solution();
console.log(object.numIslands(data));
