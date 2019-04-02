import { Graph } from "./graph.js";
import { LinkedList } from "../linkedList/singly-linked-list-plus.js";

/**
 * 广度优先遍历（已经包装为 graph 对象的方法）
 */

/**
 * 
 * @param {Graph} adj 无向图
 * @param {number} s source 起点
 * @param {number} t target 终点
 */
/* export const bfs = (adj, s, t) => {   // 这个好像有问题， graph 内置的 bfs 方法就没问题。

} */

// 深度优先遍历
export const dfs = (adj, s, t) => {
    if (s == t) return;   // 不用找了
    const size = adj.length;
    // 初始化 visited prev 
    let visited = new Array(size),
        prev = new Array(size);
    for (let i = 0; i < size; i++) {
        prev[i] = -1;
        visited[i] = false;
    }
    dfscur(s, t, visited, prev, adj);   // 递归。

    printPrev(prev, s, t) // 输出最短路径

}

// 递归函数
function dfscur(start, end, visited, prev, adj) {
    if (start == end) return;
    visited[start] = true;
    
    // 找 adj[start] 的指向的结点 中，没有被访问的第一个结点。
    for (let i = 0, len = adj[start].size; i < len; i++) {
        const val = adj[start].get(i);   // start 指向的结点
        if (visited[val] == false) {
            prev[val] = start;
            dfscur(val, end, visited, prev, adj);
        }
    } 
}

// 输出 广度优先搜索 或 深度优先遍历 里的 prev
export const printPrev = (prev, s, t) => {
    let str = s;  // str 用于保存结果。
    cur(prev, s, t);

    function cur(prev, s, t) {
        const v = prev[t];
        if (v != -1 && v != s) {
            cur(prev, s, v);
            str += ' => ' + v;
        }
    }
    str += ' => ' + t;
    console.log('路径为：', str)
    return str; // 可以考虑变成数组输出。
}
