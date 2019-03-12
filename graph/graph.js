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
    this.adj[s] = t;
    this.adj[t] = s;
}