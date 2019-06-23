/**
 * 优先级队列
 * （底层应该使用小顶堆，但因为优先队列不是重点，为了方便实现，我直接用数组了，效率会低一点，有空再用堆实现一遍）
 */

export class PriorityQueue {
    constructor() {
        this.nodes = [];
    }
    // 出队
    poll() {
        const nodes = this.nodes;
        if (this.isEmpty()) return undefined;
        // 取出 dist 最小的 vertex 对象
        let minVertex = nodes[0],
            minDist = minVertex.dist,
            minVertexIndex = 0;
            

        for (let i = 1, len = nodes.length; i < len; i++) {
            if (minDist > nodes[i].dist) {
                minVertex = nodes[i];
                minDist = minVertex.dist;
                minVertexIndex = i;
            }
        }
        nodes.splice(minVertexIndex, 1);
        return minVertex;
    }

    add(vertex) {
        return this.nodes.push(vertex);
    }

    update(vertex) {
        const nodes = this.nodes;
        for (let i = 0, len = nodes.length; i < len; i++) {
            if (vertex.id === nodes[i].id) {
                nodes[i].dist = vertex.dist;
                return true;
            }
        }
        return false;
    }

    isEmpty() {
        return this.nodes.length === 0;
    }

    toString() {
        return this.nodes.map(node => {
            return {id: node.id, dist: node.dist};
        })
    }
}

export class Vertex {
    constructor(id, dist) {
        this.id = id;
        this.dist = dist;
    }
}