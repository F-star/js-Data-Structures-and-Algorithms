/**
 * 
 * @param {number} m 糖果数量
 * @param {number} n 孩子数量
 * @param {Array} candy 糖果规格（值大小）
 */
const assignCandy = (m, n, candy) => {
    // 1. 对 children 对糖果大小的需求从小到大排序。

    // 2. 糖果从小到大排序，取出能满足最小孩子大小的糖果
    // 如果找不到，那就不用分了（这里假设每个孩子只能拿一颗糖果，不能拿多颗）。

    // 3. 重复，直至糖果分完。
}

const candy = [
    [7, 2]
    [6, 2],   // 大小为 10， 数量有两个
    [5, 5], 
    [4, 10],
    [3, 4]
]

// 这里的 need 用随机数函数 随机生成吧。。。
const children = [
    {
        name: '小明',
        need: 3,
    },
    {
        name: '小花',
        need: 4,
    },
    {
        name: '咖喱人',
        need: 1,
    },
    {
        name: '小李',
        need: 56,
    },
    {
        name: '小飞',
        need: 2
    }
]

// 打印孩子的信息
const printChildrenInfo = (children) => {

}