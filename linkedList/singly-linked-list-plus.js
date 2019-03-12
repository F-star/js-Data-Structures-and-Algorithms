/**
 * 单链表（改良版，添加了哨兵结点）
 * 
 * 索引的起点为 0
 */


/**
 * 单链表构造函数
 * 
 * @param {function} Node 可选，提供自定义的结点构造函数。 
 */
let LinkedList = function(Node) {
    this.size = 0;
    this.head = new this._Node(null);
    if (Node) {
        this._Node = Node;
    }
}


LinkedList.prototype = {
    // 定义节点（node）构造函数。
    _Node: function(val) {
        this.val = val;
        this.next = null;
    },
    // 末尾插入操作
    append(...param) {
        let node = new this._Node(...param),
            p = this.head;
        while (p.next != null) {
            p = p.next;
        }
        p.next = node;


        this.size++;
        return this.toString();
    },

    // 在指定位置插入节点
    insert(pos, ...param) {
        // pos 合法区间：[0, size]
        if (pos > this.size || pos < 0) throw new Error('Unexpected Index Range');

        let node = new this._Node(...param),
            p = this.head;

        // 指针走到 pos - 1 的位置。
        for (let i = 0; i < pos; i++) {
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
        if (this.size == 0) throw new Error('Can not remove node from EMPTY list!')
        if ( pos >= this.size || pos < 0) throw new Error('Unexpected Index Range!');
        
        let p = this.head;
        
        // 指针走到 pos - 1 的位置
        for (let i = 0; i < pos; i++) {
            p = p.next;
        }
        p.next = p.next.next;

        this.size--;
        return this.toString();
    },

    // 待测试
    get(index) {
        if (index > this.size) return null;

        let p = this.head;
        for (let i = 0; i < index; i++) {
            p = p.next;
        } 

        return p.data;
    },

    toString() {
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

    // 链表反转
    reverse() {
        if (this.size <= 1) {
            return this;
        }

        let prevP = this.head.next,     // p 的上一个节点。
            p = prevP.next,             // 当前节点指针。
            nextP;                      // p 的后一个节点。

        // 容易忘记将 头节点 的next 设置为 null，导致不停循环
        this.head.next.next = null;

        while (p != null) {
            nextP = p.next;     
            p.next = prevP;     // 链表反转

            // p移位。
            prevP = p;
            p = nextP;

        }
        this.head.next = prevP;
        return this;
    },

    // 求链表中间节点（不知道 size 的情况。）
    // 方法：两个指针，一个走两步，一个走一步
    getMidNode() {
        if (this.size <= 1) {
            return this.head.next;
        }
        let fastP = this.head.next,
            slowP = fastP;
            
        while (fastP != null && fastP.next != null) {
            fastP = fastP.next.next;
            slowP = slowP.next;
        }
        return slowP;
    }
}

export { 
    LinkedList 
};
