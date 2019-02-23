import { BF } from "./BF.js";
import { powK, getCharMap, RK } from "./RK.js";


console.log('-------------- BF 算法测试');
const a = 'ldkojkladkdjoaldjfaaxhfaa'
const b = 'klad';
console.log('s:      ', a)
console.log('pattern:', b);
console.log('位置为：', BF(a, b));


console.log('-------------- RK 算法测试');
console.log('位置为：', RK(a, b));