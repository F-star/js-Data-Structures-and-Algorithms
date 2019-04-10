import { BTree } from "./binaryTree.js";
import { BSTree } from "./binarySearchTree.js";
import { Trie } from "./trie.js";


let a;

console.log('------------ 二叉树') 
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
let bTree = new BTree(a);
console.log('前序遍历：', bTree.preOrder());
console.log('中序遍历：', bTree.inOrder());
console.log('后序遍历：', bTree.postOrder());
console.log('层序遍历：', bTree.levelOrder());

console.log('----------- 二叉查找树')
console.log(
     `
          8
         /  \\
        2    20
       / \\  / \\
      1  3  10  23 
     `    
     );

a = [8, 2, 20, 1, 3, 10, 23];
let bSTree = new BSTree(a);
console.log('二叉树查找：', bSTree.find(20));
// console.log('二叉树插入数据 9：', bSTree.insert(9))
console.log('二叉树最小节点：', bSTree.findMin())
console.log('二叉树最大节点：', bSTree.findMax())
console.log('二叉树移除节点 1：', bSTree.remove(1))
console.log('二叉树移除节点 2：', bSTree.remove(2))
console.log('二叉树移除节点 20：', bSTree.remove(20))
console.log(bSTree);

console.log('---------------------------')
console.log('trie 树测试');
let trie = new Trie();

['hi', 'her', 'he', 'hello', 'how', 'see', 'so'].forEach(str => {
     trie.insert(str);
})

console.log( trie.find('see') );
console.log( trie.find('big') );


