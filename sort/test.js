

// import {insertionSort} from './insertion.js';
import { selectionSort } from './selection.js';
import { randomArray } from '../util/index.js'
import { merge, mergeSort } from './merge.js'
import { partition, quickSort } from './quick.js'
import { findKthLargest } from './practice/findKthLargest.js';
import { countingSort, radixSort } from './linearSort.js';

let a, b;

// 插入排序
console.log('-------- 插入排序测试')
a = randomArray(20);
console.log('起始值：', a.toString());
console.log('排序后：', selectionSort(a).toString() )

// merge 方法测试
console.log('------- 并归方法的 merge 方法测试')
a = [1, 2, 3, 4, 51, 84];
b = [9, 10, 11, 12, 13];
console.log('a: ', a.toString())
console.log('b: ', b.toString())
console.log('merge方法合并后', merge(a, b).toString())

// 归并排序
console.log('------- 归并排序')
a = randomArray(13);
console.log('原数组', a.toString());
console.log('排序后', mergeSort(a).toString() )

console.log('---------- 选择排序测试');
a = randomArray(14);
// a = [86,28,17,48,31,89];
console.log('初始值', a.toString())
console.log( quickSort(a).toString() ); 

console.log('------- 获取数组第 k 大元素');
a = randomArray(10);
b = a.slice();
const k = 3;
console.log('原数组：', a.toString());
console.log('排序后：', quickSort(a).toString()); 
console.log(`第${k}大的数是：`, findKthLargest(b, k))
console.log(`排序后的第${k}大的数：`, a[a.length - k])

console.log('------- 计数排序 ');
a = randomArray(8, 10);
console.log('排序前：', a.toString());
console.log(countingSort(a));

console.log('------- 基数排序')
a = randomArray(10, 99999999999);
console.log('排序前:', a.toString());
console.log(radixSort(a))