import { LinkedList } from "../linkedList/singly-linked-list-plus.js";

/**
 * 无向图。
 * 
 * @param {number} v 顶点个数
 */

export function Graph(v) {
    this.v = v;   // 顶点个数
    this.adj = new Array(v);

    for (let i = 0; i < v; i++) {
        this.adj[i] = new LinkedList();
    };
}

Graph.prototype.addEdge = function(s, t) {
    this.adj[s].append(t);
    this.adj[t].append(s);
}

Graph.prototype.size = function() {
    return this.v;
}

Graph.prototype.bfs = function(s, t) {
    if (s == t) return;
    // visited, prev, queue

    // 初始化。
    const v = this.v,
        queue = [],    // 直接用js原生的实现队列
        visited = new Array(v),
        prev = new Array(v);
    queue.push(s);
    visited[s] = true;
    for (let i = 0; i < v; i++) prev[i] = -1;


    while (queue.length > 0) {
        let m = queue.shift();
        // console.log(m)
        visited[m] = true;
        for (let i = 0; i < this.adj[m].size; i++) {
            let n = this.adj[m].get(i);
            // console.log(n);
            if (!visited[n]) {
                prev[n] = m;
                if (n == t) {
                    console.log('???')
                    print();
                    return;
                }
                queue.push(n);
            }
        }
    }

    function print() {
        // 根据 prev 获取路径。
        let n = t;
        let a = [];

        // TODO 可以考虑写成递归。
        while (n != s) {
            a.push(prev[n]);
            n = prev[n];
        }
        a.reverse()
        a.push(t);
        console.log(a)
    }

}
