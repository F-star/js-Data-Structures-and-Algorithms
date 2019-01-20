/**
 * LRU 缓存淘汰算法 
 * 
 * 使用单链表实现（可以用散列表优化）
 */

import { LinkedList } from "../singly-linked-list-plus.js";

// 数据库数据（伪数据）
let dbData = [
    { id: 1, name: 'fstar',},
    { id: 2, name: 'koa',},
    { id: 3, name: 'express',},
    { id: 4, name: 'mongodb',},
    { id: 5, name: 'nginx',},
    { id: 6, name: 'vuejs',},
    { id: 7, name: 'GameMakerStdio2',},
    { id: 8, name: 'PhotoShop',},
    { id: 9, name: 'mysql',},
    { id: 10, name: 'svgjs',},
];

// 从数据库获取数据的方法。
const getDataFromDB = (id) => {
    let r = dbData.find(item => item.id == id);
    if (!r) {
        throw new Error('数据库未存储id对应数据')
    }
    return r;
}


/**
 * Cache 构造函数。cache对象对 LinkedList 进行了包装。
 * 
 * @param {Array} data 初始化数据，需要有 id 和 name 属性。
 */
const Cache = function (max) {
    this.max = max;
    // 自定义 node 构造函数。
    this.data = new LinkedList(function(id, name) {
        this.id = id;
        this.name = name;
        this.next = null;
    });
};

Cache.prototype = {

    // 初始化数据。
    init(data) {
        data.some(item => {
            if (this.data.size > this.max) {
                console.log('超出缓存上限，已移除超出部分数据');
                return true;
            }
            this.data.append(item.id, item.name);
        });
    },
    getDataById(id) {
        // let data = this.data;
        let p = this.data.head,
            prev = null;  

        // 遍历查询
        while (p.next != null) {
            prev = p;   // 移除结点时要用到。
            p = p.next;
            // 缓存命中
            if (p.id == id) {
                // 移动到链表头部。
                prev.next = p.next;
                p.next = this.data.head.next;
                this.data.head.next = p;

                // 返回数据
                return p;
            }
        }

        // 缓存中无对应数据，需从数据库中读取数据，并缓存进 cache 中。
        let d = getDataFromDB(id);
        // 1. 缓存未满
        if (this.data.size < this.max) {
            this.data.insert(0, d.id, d.name);
            return d;
        } 
        // 缓存已满，删除尾结点，并将新结点插入头部
        else {
            this.data.removeAt(this.data.size - 1);
            this.data.insert(0, d.id, d.name);
            return d;
        }
    },

    // 输出有序 链表id
    toString() {
        let p = this.data.head,
            array = [];
        while (p.next != null) {
            p = p.next;
            array.push(p.id);
        }
        return array.join(', ');
    }

}

// let cache = new Cache(8);
// cache.init(dbData.slice(0, 5));    // 先缓存部分数据库中的数据
// console.log(cache.getDataById(9));
// console.log(cache.toString())


// window.cache = cache;

export {
    Cache,
    dbData
}

