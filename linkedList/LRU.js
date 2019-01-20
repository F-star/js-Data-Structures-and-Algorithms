
// 单链表构造函数。
let LinkedList = function() {
    this.size = 0;
    this.head = null;
}


LinkedList.prototype = {
    // 定义节点（node）构造函数。
    _Node: function(id, val) {
        this.id = id;
        this.val = val;
        this.next = null;
    },
    // 末尾插入操作
    append(id, val) {
        let node = new this._Node(id, val);
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

    // 头部前插入。
    insertBeforeHead(id, val) {
        
    },

    // 在指定位置插入节点
    insert(pos, id, val) {
        // pos 合法区间：[0, size]
        if (pos > this.size || pos < 0) throw new Error('Unexpected Index Range');

        let node = new this._Node(id, val),
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

// 测试代码


// 缓存链表
let cache = new LinkedList(),
// 数据库数据
    db = [
        {
            id: 1,
            name: 'fstar',
        },
        {
            id: 2,
            name: 'koa',
        },
        {
            id: 3,
            name: 'express',
        },
        {
            id: 4,
            name: 'mongodb',
        },
        {
            id: 5,
            name: 'nginx',
        },
        {
            id: 6,
            name: 'vuejs',
        },
        {
            id: 7,
            name: 'GameMakerStdio2',
        },
        {
            id: 8,
            name: 'PhotoShop',
        },
        {
            id: 9,
            name: 'mysql',
        },
        {
            id: 10,
            name: 'svgjs',
        },
];

// 缓存链表初始化。
db.slice(0, 5).forEach(item => {
    cache.append(item.id, item.name);
})

console.log(cache.toString());


// LRU 算法

// 根据 id 获取对应的 name。
const getValByLRU = (id) => {

    const MAX_SIZE = 7;   // 设置缓存大小

    // 遍历链表
    let currNode = cache.head;
    // 链表为空
    if (cache.size == 0) {

    } else {
        while (currNode.next != null) {
            prevNode = currNode;
            currNode = currNode.next;
            if (currNode.id == id) {
                console.log('缓存🎯');

                // 数据对应节点移动到头部。
                preNode.next = currNode.next;
                currNode.next = cache.head.next;
                cache.head = currNode;
                return;
            }
        } 
        // 代码执行到这里，说明 cache 找不到此数据。
        // 1. 缓存未满
        if (cache.size < MAX_SIZE) {

        }
    }

}