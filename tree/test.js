import { BTree } from "./binaryTree.js";


let a;

/**
 *      1
 *    /  \
 *   2    3
 *  / \  / \
 * 4  5  6   7 
 * 
 */

console.log(
`
     1
    /  \\
   2    3
  / \\  / \\
 4  5  6   7 
`    
);

a = [1,2,3,4,5,6,7,];
window.tree = new BTree(a);
console.log('前序遍历：', tree.preOrder());
console.log('中序遍历：', tree.inOrder());
console.log('后序遍历：', tree.postOrder());
