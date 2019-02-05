

// 二分法的方法，实现求一个数平方根，保留 6 位小数。
// 暂时保留整数

// 另外，球二分法还可以用 牛顿迭代法。
export const sqrt = val => {
    if (val < 0) {
        return NaN
    }
    let low = 0,
        high = parseInt(val),
        mid,    
        square,   // mid的平方
        i = 0;
    // 当区间大小为 2 时，跳出循环。
    while (low < high - 1) {

        mid = low + ((high - low) >>  1);
        // console.log(low, mid, high)
        square = mid * mid;
        if (checkSqrtInt(mid, val)) {
            return mid;
        } else if (square > val) {
            high = mid - 1;     // 不能用 high - mid，
        } else if (square < val) {
            low = mid + 1;
        }

        if (i > 100) {
            throw new Error('死循环')
        }
        i++;
    }
    console.log('最终', low, mid, high)

    // 正数范围在 low, high 中，只要不是恰好为 high，那就是 low
    if (checkSqrtInt(high, val)) {
        return high;
    } {
        return low;
    }

    // 确定正数部分，下面开始确定第一位小数


    // 检查a是否为b的平方根的整数部分。
    function checkSqrtInt(a, b) {
        return a * a == b || ( a * a < b && (a + 1) * (a + 1) > b );
    }


}