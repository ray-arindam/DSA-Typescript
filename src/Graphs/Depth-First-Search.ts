import { UndirectedEdge, createEdge } from "./Utils";

export function dfs(graph: number[][]) {
  const stack: number[] = [];
  const visited: boolean[] = Array(graph.length).fill(false);
  const result = [];

  for (let i = 1; i < graph.length; i++) {
    if (!visited[i]) {
      stack.push(i);
    }
    while (stack.length) {
      const node = stack.pop();
      if (node) {
        visited[node] = true;
        result.push(node);
        for (let i = 0; i < graph[node].length; i++) {
          if (!visited[graph[node][i]]) {
            stack.push(graph[node][i]);
          }
        }
      }
    }
  }
  return result;
}

export function recursiveDfs(graph: number[][], visited: boolean[], result: number[], index: number) {
    visited[index] = true;
    result.push(index);
    for (let i = 0; i < graph[index].length; i++) {
        if (!visited[graph[index][i]]) {
            recursiveDfs(graph, visited, result, graph[index][i]);
        }
    }
}

export function dfsRecursiveApproach(graph: number[][]): number[] {
    const visited: boolean[] = Array(graph.length).fill(false);
    const result: number[] = [];
    for(let index=1; index<graph.length; index++) {
        if(!visited[index]) {
            recursiveDfs(graph, visited, result, index);
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
  
  console.log(`DFS Traversal Iterative: ${dfs(undirectedGraph)}`);
  console.log(`DFS Traversal Recursive: ${dfsRecursiveApproach(undirectedGraph)}`);
}

main();
