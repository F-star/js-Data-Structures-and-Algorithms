/**
 * 单链表
 * 
 * 索引起点为 0
 */

// 单链表构造函数。
let LinkedList = function() {
    this.size = 0;
    this.head = null;
}


LinkedList.prototype = {
    // 定义节点（node）构造函数。
    _Node: function(val) {
        this.val = val;
        this.next = null;
    },
    // 末尾插入操作
    append(val) {
        let node = new this._Node(val);
        if (this.head == null) {
            this.head = node;
        } else {
            // 从 head 不停往后，找到最后一个位置
            let currNode = this.head;
            while (currNode.next != null) {
                currNode = currNode.next;
            }
            currNode.next = node;
        }
        this.size++;
        return this.toString();
    },

    // 在指定位置插入节点
    insert(pos, val) {
        // pos 合法区间：[0, size]
        if (pos > this.size || pos < 0) throw new Error('Unexpected Index Range');

        let node = new this._Node(val),
            currNode = this.head;

        // 找到 pos-1 位置的 节点。
        // let currNode = this.head;
        if (pos == 0) {
            this.head = node;
            node.next = currNode;
        } else {
            // pos 不为0时，查找 pos - 1 对应的节点。
            for(let i = 0; i < pos - 1; i++) {
                currNode = currNode.next;
            }
            // 进行插入操作
            let nextNode = currNode.next;
            currNode.next = node;
            node.next = nextNode;
        }
        this.size++;
        return this.toString();
    },

    // 移除指定位置的节点
    removeAt(pos) {
        if (this.head == null) throw new Error('Can not remove node from EMPTY list!')
        if ( pos >= this.size || pos < 0) throw new Error('Unexpected Index Range!');
        
        let currNode = this.head;

        if (this.size == 1) {
            this.head = null;
        } else {
            // 找到 pos-1 的位置。
            for(let i = 0; i < pos - 1; i++) {
                currNode = currNode.next;
            }
            currNode.next = currNode.next.next;
        }
        this.size--;
        return this.toString();
    },

    toString() {
        let currNode = this.head,
            str = '';
        if (currNode != null) {
            str += currNode.val;
            currNode = currNode.next;
        }
        while (currNode != null) {
            str = str + ', ' + currNode.val;
            currNode = currNode.next;
        }
        return str;
    },

    empty() {
        this.head = null;
        this.size = 0;
    },
}

export { 
    LinkedList 
};