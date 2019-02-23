


/**
 * BF算法
 * 在字符串 s 中找 pattern。
 * 
 * @param {string} s 主串
 * @param {string} pattern 模式串
 */
export const BF = (s, pattern) => {

    const m = pattern.length,
        n = s.length;
    if (n < m) return -1;

    for (let i = 0, len = n - m + 1; i < len; i++) {
        for (let j = 0; j < m; j++) {
            if (pattern[j] !== s[i + j]) {
                break;   // 发现不匹配，结束当前循环
            } 
            // 匹配到模式串的最后一个字符，说明字符串匹配成功。
            else if (j == m - 1) {
                return i;
            }
        }
    }
    return -1;
}