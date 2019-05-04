/**
 * 二叉树
 */


// 链式存储法
export function BTree(array) {
    this.root = null;
    this.init(array);
};

BTree.prototype = {

    // 生成完全二叉树。(可以看成是二叉树数组表示法转化为链表表示法)
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

    // 层序遍历
    levelOrder() {
        if (this.root == null) return '';
        let a = [],
            left, right;
        a.push(this.root);

        // 节点入队，指针指向头部元素，如果它有left/right，入队。
        // 指针后移，继续同样步骤。。。直至指针跑到队列尾部后面去。。。
        for(let i = 0; i < a.length; i++) {   // 需要注意的是，数组 a 的长度是动态变化的（不停变长）
            left = a[i].left;
            if (left) a.push(left);

            right = a[i].right;
            if (right) a.push(right);
        }
        return a.map(item => item.val).join(',');
    }
}

// 节点构造函数
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}