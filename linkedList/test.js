/** 
 * 测试代码 
 */

// import {LinkedList} from './singly-linked-list.js' 
import { LinkedList } from './singly-linked-list-plus.js';


import './practice/LRU.js'
import { Cache, dbData } from './practice/LRU.js';
// import { cache }



/******** 单链表测试 *********/
console.log('-----单链表常用操作测试--------')
let list = window.list = new LinkedList();
list.append(1);         // [1]
list.append(2);         // [1, 2]
list.append(3);         // [1, 2, 3]
list.insert(1, 1.5);    // [1, 1.5, 2, 3]
list.insert(1, 1.25)    // [1, 1.25, 1.5, 2, 3]
list.removeAt(3)        // [1, 1.25, 1.5, 3]
console.log(list.toString());
console.log('获取中间节点：', list.getMidNode())
console.log('反转：', list.reverse().toString())

/********** LRU 缓存淘汰测试 ********/
console.log('------LRU 缓存淘汰测试-------')
let cache = new Cache(6);
cache.init(dbData.slice(0, 5));    // 先缓存部分数据库中的数据
console.log('缓存初始状态：', cache.toString())
console.log(cache.getDataById(4));     
console.log(cache.getDataById(8));
console.log(cache.getDataById(9));
console.log(cache.getDataById(10));
console.log('缓存后', cache.toString());



window.cache = cache;
