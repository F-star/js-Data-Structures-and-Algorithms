/**
 * 简单的哈希表（开放寻址法 + 线性探测）
 *
 * 我们为了简单起见，以学号为例。
 */



export function HashTable(n = 100) {
    this.table = new Array(n);
    this.n = n          // 散列表容量
    this.size = 0;      // 已使用容量
}

HashTable.prototype = {
    init(array) {
        array.forEach(item => {
            this.put(item);
        })
    },

    // 添加数据
    put(data) {
        let hashVal = this.hash(data.id),
            p = this.table[hashVal];
        
        // 当前元素 不为 null，或者 deleted 为 false（其实是 deleted 不存在的情况），查找下一饿元素。

        //（1）p 不存在
        // (2）p存在，且 deleted 为 undefined
        // 满足其中一个条件即可继续往下查找
        while (p != null && (p && p.deleted == undefined)) {

            // if 

            hashVal = (hashVal + 1) % this.n;
            p = this.table[hashVal];   // 因为我们会设置 装载因子，动态扩容，所以绝对会有空位。
        }

        // 跳出条件： 当前元素为空。。。或者  当前元素不为空，但是 deleted 为 true

        // 找到空位，存起来。
        this.table[hashVal] = { data };   // 不直接保存data，是因为还需要一个 deleted 字段，要标记一个已删除元素。
        this.size++;
    },

    // TODO 查找（有问题，中间如果有 deleted 的就会找不到）
    // find 和 put不同：find 需要跳过 deleted 为 true 的数据，而添加数据不用，直接覆盖
    find(id) {
        let hashVal = this.hash(id),
            p = this.table[hashVal];

        while (p != null) {
            if (p.data && p.data.id == id) {
                return p.data;   
            }

            hashVal = (hashVal + 1) % this.n;
            p = this.table[hashVal];
        }
        return null;        // 没找到
    },

    // 移除数据（也有问题）
    remove(id) {
        let hashVal = this.hash(id),
            p = this.table[hashVal];

        while (p != null && (p && p.deleted == undefined)) {
            if (p.data.id == id) {
                // 找到了，删除data，并设置 deleted 为 true'，并返回 true 表示移除成功
                p.data = null;
                p.deleted = true; 
                return true; 
            }

            hashVal = (hashVal + 1) % this.n;
            p = this.table[hashVal];
        }
        return false;        // 没找到
    },


    // 散列函数（这里我们只取后面两位数）
    hash(key) {
        key = '' + key;
        return parseInt(key.slice(key.length - 2));
    },

    toString() {
        let r = [];
        this.table.forEach((item, index) => {
            if (item != null) {
                r.push({
                    index,
                    id: item.data ? item.data.id : 'data已经删除'
                })
            }
        })
        return r;
    }
}