import { simpleBinarySearch } from "./binarySearch.js";
import { randomUniqArray } from "../util/index.js";
import { quickSort } from "../sort/quick.js";
import { sqrt } from "./practice.js/sqrt.js";

let a, val;

console.log('简单二分查找测试');
a = quickSort(randomUniqArray(8));
val = a[ Math.floor(Math.random() * a.length)];    // 从 a 中随机选一个数。
// val = a[0];
console.log('原数组', a.toString());
console.log(`${val}在数组的第 ${simpleBinarySearch(a, val) + 1} 个`);

console.log('求平方根（二分法实现）');
val = 101;
window.sqrt = sqrt;
console.log(`${val} 的平方根为：`, sqrt(val));
console.log(`${val} 的真正平方根为：`, Math.sqrt(val));