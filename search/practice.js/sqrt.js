// 二分法的方法，实现求一个数平方根，保留 6 位小数。
// 暂时保留整数


// 【注意】js的浮点数因为精度问题，会有误差。。。建议使用一些库（但这样就掉效率）
//  10.04985 + 0.00002   // 10.049869999999999

// 另外，除了二分法还可以用 牛顿迭代法。
/**
 * 
 * @param {number} val 被开方数
 * @param {number} digits 保留小数点后几个小数，默认为 6
 */
export const sqrt = (val, digits = 6)=> {
    if (val < 0) {
        return NaN
    }
    let low = 0,
        high = parseInt(val),
        mid,    
        square,   // mid的平方
        i = 0;
    
    let step = 1,   // 单位。有 1 0.1  0.01 等。
        result;
    // 当区间大小为 2 时，跳出循环。

    
    for (let j = 0; j <= digits; j++) {

        let jumpLoop = false;

        console.count('执行')
        while (low < high - step) {
            // mid 会受到 step 影响。
            mid = low + Math.floor((high - low) / 2 / step) * step;  // 这里的相加会导致误差。。。
            // console.log('这俩加起来会有误差？' ,low, Math.floor((high - low) / 2 / step) * step)
            console.log(low, mid, high)
            square = mid * mid;
            if (checkSqrtInt(mid, val, step)) {
                console.log('找到了')
                result = mid;
                jumpLoop = true;
                break;
                // return mid;
            } else if (square > val) {
                high = mid - step;     // 不能用 high - mid，
            } else if (square < val) {
                low = mid + step;
            }
    
            if (i > 100) {
                throw new Error('死循环')
            }
            i++;
        }
        console.log('最终', low, mid, high)
    
        if (jumpLoop) {
            step /= 10;
            low = result;
            high = result + step * 9;
            continue;
        }

        // 正数范围在 low, high 中，只要不是恰好为 high，那就是 low
        if (checkSqrtInt(high, val, step)) {
            result = high;
        } else {
            result = low;
        }


        step /= 10;
        low = result;
        high = result + step * 9;
    }
    return result;

    function checkSqrtInt(a, b, step) {
        return a * a == b || ( a * a < b && (a + step) * (a + step) > b );
    }


}