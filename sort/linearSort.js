/**
 *  线性排序
 *  时间复杂度为 O(n)，有 桶排序、计数排序、基数排序
 */


// 桶排序
export const bucketSort = () => {
    // 适合外部排序
}

// 计数排序
/**
 * 
 * @param {Array} a 原数组
 * @param {number} n 桶的个数
 */
export const countingSort = (a) => {

    // 找出数组的最大的数。
    let i, max = a[0];
    for (let i = 1; i < a.length; i++) { 
        if (a[i] > max) {
            max = a[i];
        }
    } 

    let c = [];
    for (i = 0; i <= max; i++) {
        c[i] = 0;
    }
    for (i = 0; i < a.length; i++) {
        c[a[i]]++;
    }
    console.log('数组C（值表示小于等于索引的数量）：', c.toString());
    // 计数累加
    for (i = 1; i < c.length; i++) {
        c[i] = c[i - 1] + c[i];
    } 

    // 从后往前扫描 数组a（从后往前可以保证是 稳定 排序）
    let r = [];
    for(i = a.length - 1; i >= 0; i--) {
        let index = c[a[i]] - 1;   
        // 为什么要减1？？ 
        // 因为 c[] 记录的是小于等于索引的元素数量，比如小于等于 3 的有 4个，
        // 所以 3 必然是这第4个（索引对应3，所以要减1）。
        // 你会说小于等于并不是等于啊，但我们现在是正在遍历原数组，且确实发现有这个 3 了。
        r[index] = a[i];
        c[a[i]]--;
    }
    return r;
}

// 基数排序
export const radixSort = (a) => {
    // 从低到高排序
    
    // 位数拆分
    let i, tmp = [];

    const size = 11;    // 正数的位数
    let radix = 1;
    for (let j = 0; j < size; j++) {
        for (i = 0; i < a.length; i++) {
            let k = Math.floor(a[i]  / radix) % 10   // 获取j位上的值。
            tmp[i] = k;
        }
        a = cSInRadixSort(tmp, a);
        radix *= 10; 
        // console.log(a.toString());
        // 计数排序一下。（要专门为基数排序写一个计数排序，因为排序的是 a，而不是 tmp）
        // return c
    }
    return a;
  
}


/**
 * // 基数排序专用的 计数排序
 * @param {Array} a 提炼出的某位上的值
 * @param {Array} o 原数组
 */
const cSInRadixSort = (a, o) => {

    // 找出数组的最大的数。
    let i, max = a[0];
    for (let i = 1; i < a.length; i++) { 
        if (a[i] > max) {
            max = a[i];
        }
    } 

    let c = [];
    for (i = 0; i <= max; i++) {
        c[i] = 0;
    }
    for (i = 0; i < a.length; i++) {
        c[a[i]]++;
    }
    // console.log('数组C（值表示小于等于索引的数量）：', c.toString());
    // 计数累加
    for (i = 1; i < c.length; i++) {
        c[i] = c[i - 1] + c[i];
    } 

    // 从后往前扫描 数组a（从后往前可以保证是 稳定 排序）
    let r = [];
    for(i = a.length - 1; i >= 0; i--) {
        let index = c[a[i]] - 1;   
        r[index] = o[i];    // 这里 的 a[i]  改成 o[i]
        c[a[i]]--;
    }

    return r;
}