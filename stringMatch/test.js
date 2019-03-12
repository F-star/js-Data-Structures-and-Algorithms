import { BF } from "./BF.js";
import { powK, getCharMap, RK } from "./RK.js";
import { generateBC, bm, generateGS } from "./bm.js";


console.log('-------------- BF 算法测试');
let a = 'ldkojkladkdjoaldjfaaxhfaa'
let b = 'klad';
console.log('s:      ', a)
console.log('pattern:', b);
console.log('位置为：', BF(a, b));


console.log('-------------- RK 算法测试');
console.log('位置为：', RK(a, b));

console.log('-------------- RM 算法测试');
a = 'abcdef'
b = 'de'
// console.log('位置为：', bm(a, b));
let c = 'abcdabcd'
console.log(generateGS(c));