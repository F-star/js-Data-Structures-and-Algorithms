import { MinHeap } from "./heap.js";


export function topK(a, k) {
    if (a.length <= k) return a;
    
    let heap = new MinHeap(k);

    // 创建一个大小为 k 的小顶堆。
    heap.insertMany(a.slice(0, k));   // 这个 slice 会消耗额外的内存呢，有空改造一下。
    
    // 从 索引 k 开始，依次比较堆顶元素。
    for (let i = k, len = a.length; i < a.length; i++) {
        if (a[i] > heap.getTop()) {
            heap.removeTop();
            heap.insert(a[i]);
        }
    }

    

    return heap.toArray();
}