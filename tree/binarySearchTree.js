/**
 * 二叉查找树（不支持重复数据）
 */

// 链式存储法
export function BSTree(array) {
    this.root = null;
    this.init(array);
};

BSTree.prototype = {

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

    // 查找
    find(val) {
        // 假设二叉树没有重复数据
        let p = this.root;
        while(p != null) {
            if (val == p.val) return p;
            else if (val < p.val) p = p.left;
            else p = p.right;
        }
        return null; // 没找到
    },

    // 插入节点
    insert(val) {
                
        if (this.root == null) {
            this.root = node;
            return;
        }

        let node = new Node(val);
        let p = this.root;

        while (p != null) {
            if (val < p.val) {
                if (p.left == null) {
                    p.left = node;
                    return this.inOrder();
                }
                p = p.left;
            }
            else if (val > p.val) {
                // preP = p;
                if (p.right == null) {
                    p.right = node;
                    return this.inOrder();
                }
                p = p.right;
            }

            if (val == p.val) {
                console.warn('二叉树中含相同值的数据，无法插入')
                return false;
            }
        }
    },

    // 删除
    remove(val) {

        // if (this.root.left == null && this.root)

        // 假设二叉树没有重复数据
        let p = this.root;
        let parent, dir;   // 暂不考虑只有根节点一个的情况。
        while(p != null) {
            
            if (val == p.val) {
                // 要删除的节点没有子节点
                if (p.left == null && p.right == null) {
                    parent[dir] = null;
                    return true;
                } 
                // 要删除的节点只有一个子节点
                else if (p.left == null && p.right != null) {
                    parent[dir] = p.right
                    console.log('只有右节点');
                    return true;
                } else if (p.right == null && p.left != null) {
                    parent[dir] = p.left;
                    console.log('只有左节点');
                    return true;
                } 
                
                // 要删除的节点有两个子节点
                // 可以将右子树的最小结点替换到被删除的节点位置，并删除这个最小节点
                // 当然你也可以在左子树中找最大节点。
                else if (p.left != null && p.right != null) {
                    // 因为要记录最小节点的父节点，所以不能用 this.findMin()
                    // 第一步：找出最小节点 minP
                    let minParent,
                        minP = p;
                    while (minP) {
                        if (minP.left == null) {
                            // 找到。
                            break;
                            // return minP;
                        }
                        minParent = minP;
                        minP = minP.left;
                    }

                    // 第二步：替换（把数据转移过去即可）
                    p.val = minP.val;

                    // 第三步：删除最小节点
                    if (minP.right == null) {
                        minParent.left = null;
                        console.log('最小节点没有子节点');
                        return true;
                    } else if (minP.right != null) {
                        minParent.left = minP.right;
                        console.log('最小节点只有右节点');
                        return true;
                    } 

                }
                return p;
            } 

            // 继续找要删除的节点。
            else {
                parent = p;
                if (val < p.val) {
                    p = p.left;
                    dir = 'left';
                } else {
                    p = p.right;
                    dir = 'right';
                }
            }
        }
        return null;   // 没找到

        // 要保存父节点，且要记录当前节点是父节点的 left 还是 right。
    },

    // 求最小节点
    findMin() {
        if (this.root == null) {
            return null;
        }
        let node = this.root;
        while (node) {
            if (node.left == null) {
                return node;
            }
            node = node.left;
        }
    },

    findMax() {
        if (this.root == null) {
            return null;
        }
        let node = this.root;
        while (node) {
            if (node.right == null) {
                return node;
            }
            node = node.right;
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
            order += `${node.val},`;
            r(node.left);
            r(node.right);
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
        for(let i = 0; i < a.length; i++) {
            left = a[i].left;
            if (left) a.push(left);

            right = a[i].right;
            if (left) a.push(right);
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