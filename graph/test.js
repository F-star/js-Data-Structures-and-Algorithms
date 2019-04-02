import { Graph } from "./graph.js";
import { dfs } from "./dfs.js";

// 初始化邻接表
let graph = new Graph(10);

let relation = [
    [0, 1], [0, 3], [1, 2], [1, 4], [3, 4],
    [4, 5], [4, 6], [5, 7], [5, 8], [6, 7],
];
relation.forEach(item => {
    graph.addEdge(item[0], item[1]);
})

// TODO 图的可视化
console.log('图的关系（可视化待实现，读者可以在纸上画一下）：')
console.log(JSON.stringify(relation));

console.log('+ 广度优先搜索 0 -> 7：')
graph.bfs(0, 7);  

console.log('+ 深度优先搜索 8 -> 0：')
dfs(graph.adj, 8, 0);