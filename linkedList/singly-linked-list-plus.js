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
}

export { 
    LinkedList 
};
