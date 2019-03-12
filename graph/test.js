import { Graph } from "./graph.js";

// 初始化邻接表
let graph = new Graph(10);

let relation = [
    [0, 1], [0, 3], [1, 2], [1, 4], [3, 4],
    [4, 5], [4, 6], [5, 7], [6, 7],
];

relation.forEach(item => {
    graph.addEdge(item[0], item[1]);
})

console.log(graph);