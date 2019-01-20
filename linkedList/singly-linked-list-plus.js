/**
 * 单链表（改良版，添加了哨兵结点）
 * 索引的起点为 0
 */

// 单链表构造函数。
let LinkedList = function() {
    this.size = 0;
    this.head = new this._Node(null);
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
        // if (this.head == null) {
        //     this.head = node;
        // } else {
        //     // 从 head 不停往后，找到最后一个位置
        //     let p = this.head;
        //     while (p.next != null) {
        //         p = p.next;
        //     }
        //     p.next = node;
        // }
        let p = this.head;
        while (p.next != null) {
            p = p.next;
        }
        p.next = node;


        this.size++;
        return this.toString();
    },

    // 在指定位置插入节点
    insert(pos, val) {
        // pos 合法区间：[0, size]
        if (pos > this.size || pos < 0) throw new Error('Unexpected Index Range');

        let node = new this._Node(val),
            p = this.head;

        // 找到 pos-1 位置的 节点。
        // let p = this.head; 
        // if (pos == 0) {
        //     this.head = node;
        //     node.next = p;
        // } else {
        //     // pos 不为0时，查找 pos - 1 对应的节点。
        //     for(let i = 0; i < pos - 1; i++) {
        //         p = p.next;
        //     }
        //     // 进行插入操作
        //     let nextNode = p.next;
        //     p.next = node;
        //     node.next = nextNode;
        // }
        // 指针走到 pos - 1 的位置。
        for (let i = 0; i <= pos; i++) {
            p = p.next;
        }
        let next = p.next;
        p.next = node;
        node.next = next;


        this.size++;
        return this.toString();
    },

    // 移除指定位置的节点
    removeAt(pos) {
        if (this.head == null) throw new Error('Can not remove node from EMPTY list!')
        if ( pos >= this.size || pos < 0) throw new Error('Unexpected Index Range!');
        
        let p = this.head;
        
        for (let i = 0; i <= pos; i++) {
            p = p.next;
        }
        p.next = p.next.next;

        this.size--;
        return this.toString();
    },

    toString() {
        // let p = this.head,
        //     str = '';
        // if (p != null) {
        //     str += p.val;
        //     p = p.next;
        // }
        // while (p != null) {
        //     str = str + ', ' + p.val;
        //     p = p.next;
        // }
        let p = this.head,
            array = [];
        while (p.next != null) {
            p = p.next;
            array.push(p.val);
        }

        return array.join(', ');
    },

    empty() {
        this.head = null;
        this.size = 0;
    },
}

export { 
    LinkedList 
};
