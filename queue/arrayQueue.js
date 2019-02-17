/**
 * ArrayQueue 顺序队列
 */

export function ArrayQueue(n) {
    if (n == undefined) throw new Error('必须指定数组长度');
    this.items = new Array(n);
    this.n = n;
    this.head = 0;
    this.tail = 0;
}

ArrayQueue.prototype = {

    // 入队
    enqueue(val) {

        if (this.tail >= this.n) {

            // 检查 head 是否为0
            if (this.head == 0) {
                console.warn('队列已满，入队失败')
                return false;                
            } 

            // 队列搬移（如果数组很大，可能会很慢。。）
            console.log('tail 位于数组尾部，进行数据搬移')
            for(let i = this.head, len = this.tail; i < len; i++) {
                this.items[i - this.head] = this.items[i];
            }
            this.tail -= this.head;
            this.head = 0;
        }
        this.items[this.tail] = val;
        this.tail++;
        return true;
    },

    // 出队
    dequeue() {
        if (this.head == this.tail) {
            return null;  // 数组已经为空
        }
        let data = this.items[this.head];
        this.head++;
        return data;
    },

    print() {
        let r = [];
        for(let i = this.head, len = this.tail; i < len; i++) {
            r.push(this.items[i]);
        }
        console.log(r.join(','));
    }
} 