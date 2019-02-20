import { Heap, MinHeap } from "./heap.js";
import { randomArray } from "../util/index.js";
import { topK } from "./topK.js";

let a;

console.log('---------------- 大顶堆')
let heap = window.heap = new Heap(20);
heap.insertMany([1, 5, 6, 8, 9, 4, 100]);
console.log(heap.toString());

console.log('--------------- 小顶堆')
let heap2 = window.heap2 = new MinHeap(20);
heap2.insertMany([1, 5, 6, 8, 9, 4, 100]);
console.log(heap2.toString());


console.log('--------------- topK 算法')
a = randomArray(25);
console.log('原数组:', a.toString());
console.log('前5: ', topK(a, 5).toString());


