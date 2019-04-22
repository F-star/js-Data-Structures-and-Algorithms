/**
 * 区间覆盖（最大不相交覆盖）
 * 
 * 假设我们有 n 个区间，区间的起始端点和结束端点
 * 分别是 [l1, r1]，[l2, r2]，[l3, r3]，……，[ln, rn]。
 * 我们从这 n 个区间中选出一部分区间，
 * 这部分区间满足两两不相交（端点相交的情况不算相交），
 * 最多能选出多少个区间
 */

export const intervalCover = (intervals, min, max) => {
    // 1. 区间左端点排序
    intervals.sort((a, b) => a[0] - b[0])
    // console.log(intervals)

    let tmp_min = intervals[0][0];
    let tmp_max = intervals[0][1];
    let result = [intervals[0]];
    let resultIndex = 0;

    for (let i = 0, len = intervals.length; i < len; i ++) {
        const currInterval = intervals[i];

        if ( currInterval[0] >= tmp_min && currInterval[1] <= tmp_max) {
            tmp_min = currInterval[0];
            tmp_max = currInterval[1];
            result[resultIndex] = currInterval;
        } else if (currInterval[0] >= tmp_max){
            // 找下一个
            resultIndex++;
            tmp_min = currInterval[0];
            tmp_max = currInterval[1];
            result[resultIndex] = currInterval;
        }
    }
    return result
}

const intervals = [
    [6, 8],
    [2, 4],
    [3, 5],
    [1, 5],
    [5, 9],
    [8, 10],
];

// intervalCover(intervals);

