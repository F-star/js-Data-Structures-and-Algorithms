/**
 * 0-1 背包问题（求最大重量下的最大价格）
 * 通过动态规划解决
 * 
 * 问题描述：对于一组不同重量、不同价值、不可分割的物品，我们选择将某些物品装入背包，
 * 在满足背包最大重量限制的前提下，背包中可装入物品的总价值最大是多少
 */

// 其实函数中的 states 可以改为长度为 w+1 的一维数组，并改为从尾到头遍历。
// 不过使用二维数组记录每层的状态，就可以进行倒叙，得出到底放入了哪几个东西。

/**
 * 
 * @param {Array<number>} items 要放进背包的所有物品的重量
 * @param {number} n 物品的总量
 * @param {number} w 背包的最大承重
 */
const knapsack = (items, values, n, w) => {
    
    const states = new Array(n);    
    for (let i = 0; i < n; i++) {
        states[i] = new Array(w + 1);
        for (let j = 0; j < w+1; j++) {
            states[i][j] = -1;
        }
    } // 创建 array[n][w + 1] 数组。

    states[0][0] = 0;        // 第一层状态集合
    states[0][items[0]] = values[0];

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < w+1; j++) {
            if (states[i-1][j] > -1) {    // 大于 -1：表示第 i 个物品决策后，有达到重量为 j 的情况。
                if (states[i][j] < states[i-1][j]) {  // 不放进去
                    states[i][j] = states[i-1][j]; 
                }
                if (j + items[i] <= w) { // 放进去
                    if (states[i][j + items[i]] < states[i-1][j] + values[i] ) {  // 如果 states[i][j + items[i]] 已经有值了，就保留值大的那个
                        states[i][j + items[i]] = states[i-1][j] + values[i]; 
                    }
                }
            }
            
        }
    }

    // console.log(states)
    // 找出最后一行值最大的元素。
    let maxValue = -1;
    let matchWeight = 0;
    for (let i = 0; i <= w; i++) {
        if (maxValue < states[n - 1][i]) {
            matchWeight = i;
            maxValue = states[n - 1][i];
        }
    }
    return {
        value: maxValue,
        weight: matchWeight,
    }

    // 尝试拿到达到该重量的组合。
}

// 测试
const items = [2, 2, 4, 6, 3];      // 物品的重量    
const values = [3, 4, 8, 9, 6];     // 物品的价值
console.log (knapsack(items, values, 5, 9));