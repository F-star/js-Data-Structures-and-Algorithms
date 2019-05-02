/**
 * 硬币找零问题
 * 
 * 问题描述：假设我们有几种不同币值的硬币 v1，v2，……，vn（单位是元）。
 * 如果我们要支付 w 元，求最少需要多少个硬币。
 * 
 * 有空再做个加强版（列出用到的硬币）
 */

// n 为硬币的种类
const minCoins = (value, n, w) => {
    const states = new Array(w + 1);

    // 初始化（第1次决策）
    states[0] = true;
    for (let i = 0; i < n; i++) {
        if (value[i] <= w) {
            states[value[i]] = true;
        }
    }

    for(let i = 2; true; i++) {     // i 指的是第 i 次（i 从 1开始）决策。每次决策硬币数 + 1.
                                    // 当 states[w+1]变成 true 时，此时的 i 即为最小硬笔数。
        for(let j = w+1; j >= 0; j--) {    // j 指的时总价值。(倒序遍历很重要)
            // console.log('>>>')
            if (states[j] != undefined) {
                // 不用考虑 不选择硬币 的情况。因为你怎么都要要选一个的。

                // 选择一种币值的硬币
                for (let k = 0; k < n; k++) {
                    if (j + value[k] <= w) {
                        states[j + value[k]] = true;
                    }
                    if (j + value[k] == w) {
                        return i; 
                    }
                }
            }
        }
        
    }
}
// const value = [1, 3, 5];  // 币值
// console.log( minCoins(value, value.length, 9) );

const value = [1, 2, 5, 10, 20, 50];  // 币值
console.log( minCoins(value, value.length, 98) );