/**
 * 选择排序
 */

export const selectionSort = a => {
    let tmp;
    for (let i = 0, len = a.length; i < len; i++) {

        let min = a[i],     // 保存最小值，用于比较大小。
            minIndex = i;   // 保存未排序区间中，最小值对应的索引（方便进行元素交换）
        for (let j = i; j < len; j++) {
            if (a[j] < min) {
                minIndex = j;
                min =a[j]
            }
        }
        tmp = a[minIndex];
        a[minIndex] = a[i];
        a[i] = tmp;
    }
    return a;
}