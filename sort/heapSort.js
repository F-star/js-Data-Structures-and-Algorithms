/**
 * 堆排序
 * 从上往下堆化，大顶堆
 */


// 数组的一个元素不必为空。
export function heapSort(a) {

    if (a.length <= 1) return a;

    // 堆化
    for (let i = Math.floor((a.length -1)/2); i >= 0; i--) {
        heapify(a, i);
    }


    return a;
}

function heapify(a, i) {
    let len = a.length,
        maxPos;
    // console.log(i)
    while (true) {
        // 这三行：找出 i 和它的子节点中，最大值对应的索引。
        maxPos = i;      // maxPos 是个动态变化的变量，开始为 i，然后对比左子节点，更新maxPos，然后 maxPos 再对比右子节点。。
        if (i*2+1 <= len && a[i*2+1] > a[maxPos] ) maxPos = i*2+1;
        if (i*2+2 <= len && a[i*2+2] > a[maxPos] ) maxPos = i*2+2;  

        if (maxPos == i) break;

        [a[maxPos], a[i]] = [a[i], a[maxPos]];
        console.log(`对索引为${i}的数据堆化`, a.toString())
        i = maxPos;
        
    }
    return true;
}