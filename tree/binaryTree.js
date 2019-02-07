/**
 * 二叉树
 */


// 链式存储法
export function BTree(array) {
    this.root = null;
    this.init(array);
};

BTree.prototype = {

    // 生成完全二叉树。
    init(array) {

        if (array.length == 0) return;

        let a = [null];
        array.forEach(val => {
            a.push(new Node(val));
        });
        
        this.root = a[1];

        // 生成完全二叉树。
        let left, right;
        for(let i = 1; i < a.length; i++) {
            left = a[i * 2];
            if (!left) break;  // 说明 i * 2 == a.length

            right = a[i * 2 + 1];
            a[i].left = left;
            a[i].right = right;
        }
    },

    // 前序遍历（根左右）
    preOrder() {
        let order = '';
        r(this.root);

        order = order.slice(0, order.length - 1);
        return order;

        // 递归函数
        function r(node) {
            if (!node) return;
            // console.log(node)
            order += `${node.val},`;
            r(node.left);
            r(node.right);
            // console.log(node.left);
            // console.log(node.right);
        }
        
    },

    // 中序遍历
    inOrder() {
        let order = '';
        r(this.root);

        order = order.slice(0, order.length - 1);
        return order;

        // 递归函数
        function r(node) {
            if (!node) return;
            r(node.left);
            order += `${node.val},`;
            r(node.right);
        }
    },

    // 后序遍历
    postOrder() {
        let order = '';
        r(this.root);

        order = order.slice(0, order.length - 1);
        return order;

        // 递归函数
        function r(node) {
            if (!node) return;
            r(node.left);
            r(node.right);
            order += `${node.val},`;
   
        }
    },

    // 层序遍历（未完成
    levelOrder() {

        function r(node) {
            if (!node) return;
            // console.log(node.val); 
            console.log(node.left);
            console.log(node.right);
            r(node.left);
        }

    }

    
}

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}