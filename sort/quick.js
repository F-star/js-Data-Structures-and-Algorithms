/**
 * 快速排序
 */

export const quickSort = a => {
    quickSortC(a, 0, a.length - 1)
    return a;
}

// 递归方法
/**
 * 参数意义同 partition 方法。
 */
function quickSortC(a, q, r) {
    if (q >= r) {
        // 提供的数组长度为1时，结束迭代。
        return a;
    }
    let p = partition(a, q, r);
    quickSortC(a, q, p - 1);
    quickSortC(a, p + 1, r);
}

// 随机选择一个元素作为 pivot，进行分区，最后返回其下标
/**
 * 
 * @param {Array} a 要排序的数组
 * @param {number} p 起始索引
 * @param {number} r 结束索引
 * @return 基准的索引值，用于后续的递归。
 */
export function partition(a, p, r) {
    // 为了减少空间复杂度，我们使用 原地排序。

    // pivot 默认取最后一个
    let pivot = a[r],
        tmp,
        i = p;     // 已排序区间的末尾索引。
    // 类似选择排序，把小于 pivot 的元素，放到 已处理区间
    for (; p < r; p++) {
        if (a[p] < pivot) {
            // 将 a[i] 放到 已处理区间。
            tmp = a[p];
            a[p] = a[i];
            a[i] = tmp;    // 这里可以简写为 [x, y] = [y, x]
            i++;
        }
    }

    // 将 pivot（即a[r]）也放进 已处理区间
    tmp = a[i];
    a[i] = a[r];
    a[r] = tmp;   
    return i;   
}