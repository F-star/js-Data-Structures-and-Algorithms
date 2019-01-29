

import {insertionSort} from './insertion.js';
import {randomArray} from '../util/index.js'

let array = randomArray(20);


// 插入排序
console.log( insertionSort(array).toString() )