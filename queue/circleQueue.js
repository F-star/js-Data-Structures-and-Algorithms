/**
 * 循环队列
 */

export function CircleQueue(n) {
    if (n == undefined) throw new Error('必须指定数组长度');
    this.items = new Array(n + 1);   // 循环队列要浪费一个空间，所以要加一（为了判断是否队满）
    this.n = n + 1; 
    this.head = 0;
    this.tail = 0;
}

CircleQueue.prototype = {

    // 入队
    enqueue(val) {

        if ((this.tail + 1) % this.n == this.head) {
            console.warn('队列已满，入队失败')
            return false;  
        }
        this.items[this.tail] = val;
        this.tail = (this.tail + 1) % this.n;
        return true;
    },

    // 出队
    dequeue() {
        if (this.head == this.tail) {
            return null;  // 数组已经为空
        }
        let data = this.items[this.head];
        this.head = (this.head + 1) % this.n;
        return data;
    },

    print() {
        let r = [];
        for(let i = this.head, tail = this.tail; i != tail; i = (i + 1) % this.n) {
            r.push(this.items[i]);
        }
        console.log(r.join(','));
    }
} 