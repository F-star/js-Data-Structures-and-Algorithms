/**
 * 回溯算法 之
 * 八皇后问题
 * 
 * 下面代码可以得到出所有满足解法
 * 如果你只想要第一个解法，可以把 endFlage 的相关注释取消掉。
 */

const eightQueens = () => {
    let result = new Array(8);
    // let endFlag = false;

    const cal8queens = (row) => {
        // if (endFlag) return;
        if (row == 8) {
            console.log(result);
            // endFlag = true;
            return;
        }
        // result[0] = 0; // 第一行先放好。
        // row++;
        for (let i = 0; i < 8; i++) {  // i 是列。

            if (isOk(row, i)) {
                result[row] = i;
                cal8queens(row+1);   
                // 第一行成功就第二行，如果有一行都失败了。就跑回第一行的下一个列开始
                // 知道跑到 8
            }
        }
    }
  

    const isOk = (row, column) => {
        let leftTop = column - 1,
            rightTop = column + 1;
        /* if (row == 7 && column == 2) {
            // console.log(result[3])
        } */
        if (row == 0) return true;
        for (row = row-1;row >= 0;row--) {
        // while (row >= 0) {
            if (result[row] == column) return false;
            if (leftTop >= 0 && result[row] == leftTop) return false;
            if (rightTop < 8 && result[row] == rightTop) return false;
            leftTop--;
            rightTop++;
        }
        return true;

    }

    cal8queens(0);
}

eightQueens();

