import { LinkedList } from "../linkedList/singly-linked-list-plus.js";

/**
 * 拓扑排序
 * 
 * 注意进行拓扑排序的图不能有环。
 */

// 首先我们先实现一个 “有向图”，在之前图的实现中，进行一些修改即可。
function DirectedGraph(v) {
    this.v = v;   // 顶点个数
    this.adj = new Array(v);

    for (let i = 0; i < v; i++) {
        this.adj[i] = new LinkedList();
    };
}

DirectedGraph.prototype.addEdge = function(s, t) {
    this.adj[s].append(t);
}

DirectedGraph.prototype.size = function() {
    return this.v;
}

DirectedGraph.prototype.toString = function() {
    for (let i = 0; i < this.v; i++) {
        console.log({i, to: this.adj[i].toString() });
    }
}

// kahn 算法
DirectedGraph.prototype.topoSortByKahn = function() {
    let inDegree = new Array(this.v);   // 记录所有顶点的入度。
    for (let i = 0; i < this.v; i++) {
        inDegree[i] = 0;
    } 


    for (let i = 0; i < this.v; i++) {
        const adj = this.adj[i];
        for (let j = 0, len = adj.size; j < len; j++) {
            const w = adj.get(j)
            inDegree[w]++;
        }
    }

    const queue = [];   // 队列，方便起见，使用了 js 的（动态）数组。
    let p = 0;          // 指针。指针前面的表示表示已经排序好了。
    for (let i = 0; i < this.v; i++) {
        if (inDegree[i] === 0) queue.push(i);
    } 

    while (p < this.v) {
        const i = queue[p++];   // p指针后移。
        const adj = this.adj[i];
        for (let j = 0, len = adj.size; j < len; j++) {
            const w = adj.get(j);
            inDegree[w]--;
            if (inDegree[w] == 0) {
                queue.push(w);
            }
        }
    }

    return queue;
}



// 基于 深度优先遍历（DFS）的拓扑排序
DirectedGraph.prototype.topoSortByDFS = function() {
    // 思路是得到 逆链接表，然后遍历所有节点，进行深度
    const v = this.v;
    let inverseAdj = new Array(v);
    for (let i = 0; i < v; i++) {
        inverseAdj[i] = new LinkedList();
    }

    for (let i = 0; i < v; i++) {
        // inverseAdj[i] = new LinkedList();
        for (let j = 0; j < this.adj[i].size; j++) {
            inverseAdj[this.adj[i].get(j)].append(i);
        }
    }
    
    let arr = [],
        visited = {};
    for (let i = 0; i < v; i++) {
        if(!visited[i]) defcur(i)
    }

    function defcur(start) {
        const size = inverseAdj[start].size;
        for (let i = 0; i < size; i++) {
            const w = inverseAdj[start].get(i)
            if (!visited[w]) {
                visited[w] = true;  // ??这个好像可以去掉？因为没有环？算了不去掉了。
                defcur(w);
            }
        }
        arr.push(start);
        visited[start] = true;
    }
    return arr;
}

export {
    DirectedGraph
}

