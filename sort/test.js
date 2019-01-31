

// import {insertionSort} from './insertion.js';
import { selectionSort } from './selection.js';
import { randomArray } from '../util/index.js'
import { merge, mergeSort } from './merge.js'

let array = randomArray(20);


// 插入排序
console.log( selectionSort(array).toString() )

// merge 方法测试
let a = [1,2,3,4, 5, 84];
let b = [9, 10, 11, 12, 13];
console.log('TCL: a', a)
console.log('TCL: b', b)
console.log( merge(a, b))

// 归并排序
array = randomArray(20);
console.log( mergeSort(array).toString() )