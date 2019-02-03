/**
 * 查找无序数组中底 k 大的数。
 */



export const findKthLargest = (a, k) => {
    if (k > a.length) throw new Error('k超出数组范围')
    return findKthLargestC(k, a, 0, a.length - 1)
}

const findKthLargestC = (k, a, q, r) => {
    // 使用 分治和分区思想。
    let p = partition(a, q, r);
    if ( k - 1 == p) {
        return a[p];
    } else if (k - 1 < p) {
        // 在左边
        return findKthLargestC(k, a, q, p - 1);

    } else {
        return findKthLargestC(k, a, p + 1, r); 
    }
}

// 依旧要用到快速排序的 partition，不过改为大值放左边。
export function partition(a, p, r) {

    let pivot = a[r],
        i = p;     // 已排序区间的末尾索引。

    for (; p < r; p++) {
        if (a[p] > pivot) {
            // 将 a[i] 放到 已处理区间。
            [a[p], a[i]] = [a[i], a[p]];
            i++;
        }
    }

    // 将 pivot（即a[r]）也放进 已处理区间
    [a[i], a[r]] = [a[r], a[i]]
    return i; 
}