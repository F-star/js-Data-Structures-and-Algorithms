/**
 * 回溯算法 之
 * 0-1背包问题（不是很懂）
 */

let maxW = -1;
const f = (i, cw, items, n, w) => {
    if (cw == w || i == n) {
        if (cw > maxW) maxW = cw;    // 一种情况的结束情况。此时看看总重量对不对
        return
    }
    f(i+1, cw, items, n, w);   // item 不放进去的情况
    if (cw + items[i] <= w) {
        f(i+1, cw + items[i], items, n, w);  // item 放进入的情况
    }
}


// 测试
const a = [2,4,5,9];
f(0, 0, a, a.length, 12);


console.log(maxW);