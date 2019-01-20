/** 
 * 测试代码 
 */

// import {LinkedList} from './singly-linked-list.js' 
import {LinkedList} from './singly-linked-list-plus.js' 



/******** 单链表测试 *********/
let list = window.list = new LinkedList();
list.append(1);         // [1]
list.append(2);         // [1, 2]
list.append(3);         // [1, 2, 3]
list.insert(1, 1.5);    // [1, 1.5, 2, 3]
list.insert(1, 1.25)    // [1, 1.25, 1.5, 2, 3]
list.removeAt(3)        // [1, 1.25, 1.5, 3]

console.log(list.toString());
