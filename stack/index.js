
import { ArrayStack } from "./arrayStack.js";



// 顺序栈测试
let stack = new ArrayStack(4);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);      // 超过容量，入栈失败
stack.pop();
stack.push(3);      // [1, 3]
stack.push(6);      // 超过容量，入栈失败


console.log(stack.items)

window.stack = stack;