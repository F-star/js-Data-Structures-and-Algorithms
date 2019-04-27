/**
 * 归并排序
 * 
 * 这里的实现，多用了 left 和 righ 两个数组，内存使用不是最优。
 */

export const mergeSort = a => {

    if (a.length <= 1) return a;
    let mid = Math.floor( a.length / 2 ),
        left = a.slice(0, mid),    // 这里可以优化，因为这里是开辟了新的内存空间。我们拿 索引传入 merge 就好（merge方法也要修改）。
        right = a.slice(mid);
    
    // 果然 递归 很难理解
    return merge(mergeSort(left), mergeSort(right));
}


/**
 * merge方法（将两个有序数组合并成一个有序数组）
 * 维基百科的实现 使用了 shift()，感觉性能会不好。
 */
export function merge(a, b) {
    let i = 0,
        j = 0,
        m = [];    // 合并的数组
    
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            m.push(a[i]);
            i++;
        } else {
            m.push(b[j]);
            j++;
        }
    }

    // 把还有剩余的 a（或b）放入到 m 末尾（a 和 b必然有一个为空，所以不用担心顺序不对）
    m = m.concat(b.slice(j), a.slice(i));

    return m;
}