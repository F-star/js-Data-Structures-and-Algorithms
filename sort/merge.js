/**
 * 归并排序
 */

export const mergeSort = a => {
    // 先尝试用递归代码实现
    let mid = Math.floor(length / 2);
    return merge (mergeSort(a.slice(0, mid))  ) ;

    function merge() {
        
    }
}