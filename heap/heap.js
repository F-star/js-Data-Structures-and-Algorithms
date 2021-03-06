/**
 * 堆（大顶堆）
 */

export function Heap(n) {
    this.a = new Array(n + 1);     // 为了方便计算子节点的索引，我们不使用数组的第一个元素（索引为 0）。
    this.n = n;             
    this.count = 0;  
    // 理论上这些是私有变量，js不支持私有变量写法。另外我也懒得加 _了。
}

Heap.prototype = {
    insertMany(a) {
        a.forEach(val => {
            this.insert(val);
        })
    },

    // 入堆，从下往上堆化。
    insert(val) {
        if (this.count >= this.n) {
            console.log('堆满了，别加了！！')
            return;
        }
        this.count++;

        let a = this.a;
        a[this.count] = val;

        let i = this.count,
            j = Math.floor(i/2);   // 临时存储 i/2

        while (i > 1 && a[i] > a[j]) {
            
            [a[i], a[j]] = [a[j], a[i]];
            i = j;
            j = Math.floor(i/2);
        }
        // console.log(this.toString())
        return true;
    },

    // 删除堆顶元素
    removeMax() {
        if (this.count == 0) return false;

        this.a[1] = this.a[this.count];
        this.a[this.count] = undefined;
        this.count--;

        // 从上往下 堆化
        let i = 1,
            maxPos = i;

        // if (i * 2 <= this.count && this.a[i*2] > this.a[maxPos]) maxPos = i * 2;
        // if (i * 2 + 1 <= this.count && this.a[i*2 + 1] > this.a[maxPos]) maxPos = i * 2 + 1;
        

        // 从上往下堆化。
        while (true) {
            // maxPos 指的是 a[i]节点 和 它的两个子节点 中值最大的节点的 “下标”。
            if (i * 2 <= this.count && this.a[i*2] > this.a[maxPos]) maxPos = i * 2;  
            if (i * 2 + 1 <= this.count && this.a[i*2 + 1] > this.a[maxPos]) maxPos = i * 2 + 1;
    
            if (maxPos == i) {
                break;
            }
 
            [this.a[i], this.a[maxPos]] = [this.a[maxPos], this.a[i]];
            i = maxPos;
            
        }

        console.log(this.toString())
        return true;

    },

    // 堆化方法。。。
    heapify() {

    },


    toString() {
        return this.a.toString();
    }
}

// 小顶堆，topK排序要用
export function MinHeap(n) {
    this.a = new Array(n + 1);    // 为了方便计算子节点的索引，我们不使用数组的第一个元素（索引为 0）。
    this.n = n;             
    this.count = 0;  
    // 理论上这些是私有变量，js不支持私有变量写法。另外我也懒得加 _了。
}

MinHeap.prototype = {
    insertMany(a) {
        a.forEach(val => {
            this.insert(val);
        })
    },
    
    // 入堆。
    insert(val) {
        if (this.count >= this.n) {
            console.log('count:', this.count, 'n:', this.n)
            console.log('堆满了，别加了！！')
            return;
        }
        this.count++;

        let a = this.a;
        a[this.count] = val;

        let i = this.count,
            j = Math.floor(i/2);   // 临时存储 i/2

        while (i > 1 && a[i] < a[j]) {
            
            [a[i], a[j]] = [a[j], a[i]];
            i = j;
            j = Math.floor(i/2);
        }
        // console.log(this.toString())
        return true;
    },

    // 删除堆顶元素
    removeTop() {
        if (this.count == 0) return false;

        this.a[1] = this.a[this.count];
        this.a[this.count] = undefined;
        this.count--;

        // 从上往下 堆化
        let i = 1,
            maxPos = i;


        // 从上往下堆化。
        while (true) {
            if (i * 2 <= this.count && this.a[i*2] < this.a[maxPos]) maxPos = i * 2;
            if (i * 2 + 1 <= this.count && this.a[i*2 + 1] < this.a[maxPos]) maxPos = i * 2 + 1;
    
            if (maxPos == i) {
                break;
            }
 
            [this.a[i], this.a[maxPos]] = [this.a[maxPos], this.a[i]];
            i = maxPos;
            
        }

        // console.log(this.toString())
        return true;
    },

    getTop() {
        if (this.n == 0) {
            return false;   // 没有数据
        }
        return this.a[1];
    },

    toString() {
        return this.a.toString();
    },

    toArray() {
        return this.a.slice(1)
    }
}