import { Graph } from "./graph.js";
import { LinkedList } from "../linkedList/singly-linked-list-plus.js";

/**
 * 广度优先遍历
 */


/**
 * 
 * @param {Graph} adj 无向图
 * @param {number} s 起点
 * @param {number} t 终点
 */
export const bfs = (adj, s, t) => {
    if (s == t) return;
    // visited, prev, queue

    // 初始化。
    const v = adj.size(),
        queue = [],    // 直接用js原生的实现队列
        visited = new Array(v),
        prev = new Array(v);
    for (let i = 0; i < v; i++) prev[i] = -1;

    while (queue.length > 0) {
        let m = queue.shift();
        for (let i = 0; i < m.size; i++) {
            let n = adj[m].get(i);
            prev[n] = m;
            queue.push(n);
        }
    }

    // 根据 prev 获取路径。
    let n = t;
    let a = [];
    while (n != s) {
        a.push(prev[n]);
    }
    a.reverse().unshift(s).push(t)

    return a;
}





