/**
 * BM 算法（暂时先实现坏字符规则）
 * 
 * @param {string} s 主串
 * @param {string} pattern 模式串
 */

export const bm = (s, pattern) => {
    // 先只实现 坏字符。
    const m = pattern.length,
        n = s.length;
    if (n.length == 0) return 0;
    if (n < m) return -1;
    if (m.length == 1) return BF(s, pattern);    // 模式串只有一个字符，就别搞这么复杂。

    const bc = generateBC(pattern);     // 记录模式串的不同字符，在模式串中的最后一次出现的位置。

    let i = 0,
        j;
    while (i <= n - m) {      // 是否等于有点难判断。其实我们要记住 **子串一共有  n - m + 1 个** 就行。

        // 查找 坏字符 在 模式串中的位置。
        for (j = m - 1; j >= 0; j--) {
            // debugger;
            if (pattern[j] !== s[i + j]) {
                break;
            }
        }

        if (j == -1) return i;    // 匹配成功

        // 计算哈希值
        const charCode = s[i + j].charCodeAt();   // s[i+j]为坏字符，我们同哟 bc[ascii] 找到在 pattern 最后出现的位置。
        // i = i + (j - bc[charCode])     // si - xi 可能是负数了。因为 xi 根本就不是 si 往前找出来的。
        let x = j - bc[charCode];   // x 为要移动的位数。

        /********* 开始计算好后缀要移动的位数 *********/
        let y;
    }
}

/**
 * 生成 好后缀数组
 * 
 * @param {string} b 模式串
 */
export const generateGS = (b) => {
    let m = b.length,
        suffix = new Array(m - 1),      // 下标为0的数组元素不使用。。貌似
        prefix = new Array(m - 1);      // 记录是否匹配。
    
    // 初始化
    for (let i = 0; i < m - 1; i++) {
        suffix[i] = -1;
        prefix[i] = false;
    }

    let j, k;
    for (let i = 0; i < m - 1; i++) {
        j = i;
        k = 0;  // 匹配的数目

        while (j >= 0) {
            // debugger;
            // console.log('??')
            // console.log(j, m - 1 - j)
            // 长度为 i 的后嘴匹配到的前缀的位置。
            // 因此该字符串的长度为 j + 1;
            if (b[j] !== b[m - 1 - k]) {
                
                break;   
            }
            console.log('j:', j)
            console.log('m - 1 - j:', m - 1 - j)
            // 如果匹配到了
            j--;
            k++;
            // 这里要 加 1，因为这里的 j 指的是前缀字符串的最后一个字符的位置
            suffix[k] = j + 1;   // 每个 suffix[n] 都是在不断地修改的。直到遍历结束。

            
        }
        if (j == -1) prefix[k] = true;   // 匹配到开头了，说明这个 i 是可以用的。

        // prefix[n] 为 true，表示长度为 n 的后缀子串有对应的前缀子串。
        // prefix 的作用是防止滑动过度。
    }
    return {
        suffix,
        prefix
    }
}

/**
 * 生成坏字符映射
 * 假设字符集不是很大，每个字符长度为1字节。
 * 
 * @param {String} s 模式串
 */
export const generateBC = (s) => {
    const SIZE = 256,
        m = s.length;
    let bc = new Array(SIZE);    

    // 初始化，都设置为 -1
    for (let i = 0; i < SIZE; i++) {
        bc[i] = -1;                 // 初始化 bc
    }

    // 字符串里有的，就映射为键值对： charCode: index
    let charCode;
    for (let i = 0; i < m; i++) {
        let charCode = s[i].charCodeAt();

        // 如果字符串有多个相同字符，只记录最后一个字符的位置。
        bc[charCode] = i;                
    }
    return bc;
}