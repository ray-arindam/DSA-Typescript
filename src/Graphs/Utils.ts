export interface UndirectedEdge {
  node1: number;
  node2: number;
  weight?: number;
}

export function createEdge(
  graph: number[][],
  edge: UndirectedEdge,
  isUndirected: boolean = true
) {
  graph[edge.node1] = [...graph[edge.node1], edge.node2];
  isUndirected && (graph[edge.node2] = [...graph[edge.node2], edge.node1]);
}
