import { UndirectedEdge, createEdge } from "./Utils";

export function bfs(graph: number[][]) {
  const queue: number[] = [];
  const visited: boolean[] = Array(graph.length).fill(false);
  const result = [];

  for (let i = 1; i < graph.length; i++) {
    if (!visited[i]) {
      queue.push(i);
    }
    while (queue.length) {
      const node = queue.shift();
      if (node) {
        visited[node] = true;
        result.push(node);
        for (let i = 0; i < graph[node].length; i++) {
          if (!visited[graph[node][i]]) {
            queue.push(graph[node][i]);
          }
        }
      }
    }
  }
  return result;
}

function main() {
  const graph: UndirectedEdge[] = [
    { node1: 1, node2: 2 },
    { node1: 1, node2: 5 },
    { node1: 2, node2: 3 },
    { node1: 2, node2: 6 },
    { node1: 2, node2: 7 },
    { node1: 2, node2: 8 },
    { node1: 3, node2: 4 },
    { node1: 8, node2: 9 },
    { node1: 8, node2: 10 },
  ];

  const nodes = 10;
  const undirectedGraph: number[][] = Array(nodes + 1).fill([]);

  for (let edge of graph) {
    createEdge(undirectedGraph, edge);
  }

  console.log(`BFS Traversal: ${bfs(undirectedGraph)}`);
}

main();
