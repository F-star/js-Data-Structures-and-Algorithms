/**
 * 插入排序（从尾到头插入查找插入点）
 */

export const insertionSort = a => {

    for (let i = 0, len = a.length; i < len; i++) {
        let curr = a[i];     // 存储当前值，排序的时候，它对应的索引指向的值可能会在排序时被覆盖
        for (let j = i - 1; j >= 0;j--) {
            if (curr < a[j]) {
                a[j + 1] = a[j];
            } else {
                break;
            }
            // 找到位置（0 或 curr >= a[j]时）
            a[j] = curr;
        }
    } 
    return a;
}