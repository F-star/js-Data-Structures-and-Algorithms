/**
 * 栈（数组实现）
 * 理论上，直接用 js 的自带的数组就可以了，这里只是模仿 push 和 pop 实现。
 */

 /**
  * 
  * @param {*} size 栈的大小
  */
export const ArrayStack = function (n) {
    this.items = [];
    this.size = 0;
    this.n = n;         // 栈的大小
}

ArrayStack.prototype = {
    // 入栈
    push(item) {
        if (this.n == this.size) return false;
        this.items[this.size] = item;
        this.size++;
        return true;
    },

    // 出栈
    pop() {
        if(this.size == 0) return null;
        let tmp = this.items[this.size - 1];
        this.size--;
        return tmp;
    }
}