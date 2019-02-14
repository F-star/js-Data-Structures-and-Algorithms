/**
 * 冒泡排序
 */

const bubbleSort = (a) => {
    // 每次遍历找到最大（小）的数放到最后面的位置。
    // 优化：如果某次冒泡操作没有数据交换，说明已经有序了。

    // 双重循环。
    if (a.length <= 1) return a;

    // 起始的数组a
    console.log(a)
    // 这里的 i < len 改成 i < len - 1 也是正确的，因为最后第 len - 1次并不会执行。
    for (let i = 0, len = a.length; i < len; i++) {
        let exchangeFlag = false;   // 是否发生过换
        for (let j = 0; j < len - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                exchangeFlag = true;
            }
            
        }
        console.log(a)
        if (exchangeFlag == false) return a;
    }
}

let array = [199, 3, 1, 2, 8, 21,4, 100, 8];

console.log (bubbleSort(array));