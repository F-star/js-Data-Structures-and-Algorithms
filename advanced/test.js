import { DirectedGraph } from "./topoSort.js";

let graph = new DirectedGraph(8);

console.log(`
/**
 * 
 *      6 -> 7
 *           ↓ 
 * 0 -> 1 -> 2 -> 3
 *      ↓         ️↑
 *      4         5
 *
 */
`)
let relation = [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 4],
    [5, 3],
    [6, 7],
    [7, 2],
];
relation.forEach(item => {
    graph.addEdge(item[0], item[1]);
});

console.log('基于 kapn 的拓扑排序为：')
console.log (graph.topoSortByKahn());

console.log('基于 dfs（深度优先遍历） 的拓扑排序为：')
console.log (graph.topoSortByDFS())