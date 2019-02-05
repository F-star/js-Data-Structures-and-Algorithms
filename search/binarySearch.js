/**
 * 二分查找
 */


// 简单二分查找
// 要求给出的有序数组中不存在重复元素，返回索引值。
export const simpleBinarySearch = (a, val) => {
    let mid,
        low = 0,
        high = a.length - 1,
        i = 0;

    while (low <= high) {   
        // 为什么是 <=  而不是 < ？
        // 因为需要保证当 low 和 high 相等时，还能进行一次 mid 计算（刚好在 low/high 上），定位到（low 或 high 上）
        mid = Math.floor((low + high) / 2);
        if (a[mid] == val) {
            return mid;
        } else if (a[mid] > val) {
            high = mid - 1;
        } else if (a[mid] < val) {
            low = mid + 1
        }
        
        // 防止死循环
        if (i > 3000) {
            return console.log('跳出死循环')
        }
        i++;
    }
    return -1;  // 找不到

}