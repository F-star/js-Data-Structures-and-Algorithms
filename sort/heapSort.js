/**
 * 堆排序
 * 从上往下堆化，大顶堆
 * 传入数组的第一个元素不必为空。
 */



export function heapSort(a) {

    if (a.length <= 1) return a;

    // 建堆
    let len = a.length;
    for (let i = Math.floor((a.length -1)/2); i >= 0; i--) {
        heapify(a, i, len);
    }

    // 排序
    sort(a);
    return a;

}


function sort(a) {
    let count = a.length - 1;
    
    let i = 0;
    while (count > 0) {

        swap(a, 0, count);
        heapify(a, 0, count - 1);   // 易错点：count - 1 容易写成 count，注意 count 往后的数组元素都是脱离了堆的
        count--;

        console.log(a.toString())

        if (i > 100) {
            return console.log('死循环')
        }
        i++;
    }
}

// 从上往下堆化
function heapify(a, i, count) {

     let maxPos;
    // console.log(i)
    while (true) {
        // 这三行：找出 i 和它的子节点中，最大值对应的索引。
        maxPos = i;      // maxPos 是个动态变化的变量，开始为 i，然后对比左子节点，更新maxPos，然后 maxPos 再对比右子节点。。
        if (i*2+1 <= count && a[i*2+1] > a[maxPos] ) maxPos = i*2+1;
        if (i*2+2 <= count && a[i*2+2] > a[maxPos] ) maxPos = i*2+2;  

        if (maxPos == i) break;

        [a[maxPos], a[i]] = [a[i], a[maxPos]];
        // console.log(`对索引为${i}的数据堆化`, a.toString())
        i = maxPos;
        
    }
    return true;
}

function swap(a, i, j) {
    [a[i], a[j]] = [a[j], a[i]];
} 