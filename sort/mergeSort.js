/**
 * 归并排序
 */

export const mergeSort = a => {
    mergeSortC(a, 0, a.length - 1)
    return a;
}

const mergeSortC = (a, p, r) => {
    if (p >= r) return
    let q = Math.floor( (p + r) / 2 ); // 这样取中间值，right.length >= left.length
    mergeSortC(a, p, q);
    mergeSortC(a, q+1, r);
    merge(a, p, q, r)  // p->q （q+1）->r 区域的两个数组合并。
}

/**
 * merge方法（将两个有序数组合并成一个有序数组）
 */
export function merge(a, p, q, r) {
    let i = p,
        j = q+1,
        m = new Array(r - q);    // 保存合并数据的数组
    
    let k = 0;
    while (i <= q && j <= r) {
        if (a[i] <= a[j]) {
            m[k] = a[i];
            i++;
        } else {
            m[k] = a[j]
            j++;
        }
        k++;
    }

    // 首先找出两个数组中，有剩余的元素的数组。
    // 然后将剩余元素依次放入数组 m。
    let start = i,
        end = q;
    if (j <= r) {
        start = j;
        end = r;
    }

    while (start <= end) {
        m[k] = a[start];
        start++;
        k++;
    }
    // m的数据拷贝到 a。
    for(let i = p; i <= r; i++) {
        a[i] = m[i-p];
    }
}
