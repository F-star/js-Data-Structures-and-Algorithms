/**
 * 有向有权图（对 无向图 的改造）。
 * 
 * 引入了 Edge 类，来存储权重和起点终点。
 * 因为测试最短路径算法，要用到有向有权图。
 * 
 */

import { LinkedList } from "../../linkedList/singly-linked-list-plus.js";
import { PriorityQueue, Vertex } from "./priorityQueue.js";


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

Graph.prototype.addEdge = function(s, t, w) {
    this.adj[s].append(new Edge(s, t, w));
}

Graph.prototype.size = function() {
    return this.v;
}


Graph.prototype.toString = function() {
    for (let i = 0; i < this.v; i++) {
        console.log({i, to: this.adj[i].toString() });
    }
}

Graph.prototype.shortestPathByDijkstra = function(s, t) {
    const adj = this.adj,
          v = this.v;
    if (s < 0 || s >= v || t < 0 || t >= v) {
        throw new Error('范围越界')
    }
    if (s == t) return [s];

    // 创建优先级队列
    const queue = new PriorityQueue();
    const inqueue = new Array(v)  // 记录节点是否进入过队列，通过它来确定是添加 vertex 还是替换已存在的 vertex。
    const prev = new Array(v);    // 作用和 dfs 或 bfs 的 prev 作用相同
    // 初始化 Vertexs 数组
    const vertexs = new Array(v);
    for (let i = 0; i < v; i++) {
        vertexs[i] = new Vertex(i, Number.MAX_VALUE);
    }

    queue.add(new Vertex(s, 0));  // 将起始顶点放入优先级队列。
    inqueue[s] = true;
    
    while (!queue.isEmpty()) {
        /* console.log({
            queue: queue.toString(),
        }) */
        const minVertex = queue.poll();
        if (minVertex.id == t) {
            //return minVertex.dist;
            return resolvePrev(prev, s, t)
        }
        for (let i = 0; i < adj[minVertex.id].size; i++) {  // 遍历 minVertex 指向的顶点
            const edge = adj[minVertex.id].get(i),
                  nextVertex = vertexs[edge.tid];
            /* console.log({
                minVertex,
                edge,
                nextVertex,
            }) */
            if (minVertex.dist + edge.w < nextVertex.dist) {
                // 更新 vertex
                nextVertex.dist = minVertex.dist + edge.w;
                prev[nextVertex.id] = minVertex.id;
                if (!inqueue[nextVertex.id]) {
                    queue.add(nextVertex)
                    inqueue[nextVertex.id] = true;
                }
                else queue.update(nextVertex); 
            }
        }
    }
    return false;   // 图不是连通图，s 到 t 找不到任何一条能走的线路。
}

function Edge(sid, tid, w) {
    this.sid = sid;
    this.tid = tid;
    this.w = w;
}

// 解析 prev，得到正序的数组。
function resolvePrev(prev, s, t) {
    const a = [s];
    if (s == t) return a;

    f(t);
    return a;

    function f(p) {
        if (p == s) return s
        f(prev[p]);
        a.push(p);
    }
}