/**
 * 0-1 背包问题（只求最大值）
 * 通过动态规划解决
 * 
 * 问题描述：对于一组不同重量、不可分割的物品，我们需要选择一些装入背包，
 * 在满足背包最大重量限制的前提下，背包中物品总重量的最大值是多少呢
 */

// 其实函数中的 states 可以改为长度为 w+1 的一维数组，并改为从尾到头遍历。
// 不过使用二维数组记录每层的状态，就可以进行倒叙，得出到底放入了哪几个东西。

/**
 * 
 * @param {Array<number>} items 要放进背包的所有物品的重量
 * @param {number} n 物品的总量
 * @param {number} w 背包的最大承重
 */
const knapsack = (items, n, w) => {
    
    const states = new Array(n);    
    for (let i = 0; i < n; i++) {
        states[i] = new Array(w + 1);
    } // 创建 array[n][w + 1] 数组。

    states[0][0] = true;        // 第一层状态集合
    states[0][items[0]] = true;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < w+1; j++) {
            if (states[i-1][j] == true) states[i][j] = true; // 不放进去
            
            if (states[i-1][j] + items[i] <= w) {
                states[i][j + items[i]] = true;             // 放进去
            }
            if (states[i-1][j] + items[i] == w) {
                return w;       // 发现了一种情况刚好重量合适，提前结束遍历。
            };  
        }
    }

    // 找出最后一行最后一个值为 true 的下标。
    // console.log(states)
    for (let i = w; i >= 0; i--) {
        if (states[n-1][i] == true) return i;
    }
}



// 测试
const items = [2, 2, 4, 6, 3];
console.log (knapsack(items, 5, 9));