import { Graph } from "./graph.js";

let graph = new Graph(6);
console.log(`
/**
 * 4 -------------
 * ↑              ↓
 * 0 -> 1 -> 2 -> 5
 *      |    ↑    ↑ 
 *      ---> 3 ----
 *
 * 6
 */
`)
let relation = [
    [0, 1, 10],   // [s, t, w]  起点、终点、权重
    [1, 2, 15],
    [1, 3, 2],
    [2, 5, 5],
    [3, 2, 1],
    [3, 5, 12],
    [0, 4, 15],
    [4, 5, 10]
];
relation.forEach(item => {
    graph.addEdge(item[0], item[1], item[2]);
});
console.log('dijkstra 单源最短路径算法：')
console.log( graph.shortestPathByDijkstra(0, 5) )  
