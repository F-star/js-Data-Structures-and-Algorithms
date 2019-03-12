import { BF } from "./BF.js";

/**
 * RK匹配算法（BF匹配算法加强版）
 * 
 * 仅支持 a-z 共26种字符。
 */

export const RK = (s, pattern) => {
    const m = pattern.length,
        n = s.length;
    if (n.length == 0) return 0;
    if (n < m) return -1;
    if (m.length == 1) return BF(s, pattern);    // 只有模式串一个字符，就别搞这么复杂。

    const pow26 = powK(26, m);
	console.log('TCL: RK -> pow26', pow26)
    const charMap = getCharMap();
	console.log('TCL: RK -> charMap', charMap)

    // 计算 pattern 的哈希值
    let patternHash = 0;
    for (let i = 0; i < m; i++) {
        patternHash += (pow26[m-1-i] * charMap[pattern[i]]);
    }

    console.log(patternHash);

    // 子串哈希值计算。
    let subStrHash = 0;
    let firstVal;     // 保存第一个字符对应的十进制值。
    
    // 计算 "第一个子串" 的哈希值。（其实这两段可以写到循环里的，可读性更好，不过这样效率会变低。）
    firstVal = pow26[m-1] * charMap[s[0]]; 
    subStrHash += firstVal;
    for(let i = 1; i < m; i++) {
        subStrHash += (pow26[m-1-i] * charMap[s[i]]);
    }
    if (subStrHash == patternHash) return 0; 

    // 从 1 开始到后面的子串。
    for (let i = 1, len = n - m + 1; i < len; i++) {
        subStrHash = (subStrHash - firstVal) * 26 + charMap[s[i + m - 1]];
        firstVal = pow26[m-1] * charMap[s[i]]; 
        if (subStrHash == patternHash) return i;
        
    }
    return -1;  // 没找到
}

// 返回保存 k^0 到 k^n 数据的长度为 n 的数组。（感觉可以在）
// 需要注意的是：数值可能会超出整型数据可以表示的范围。
export const powK = (k, m) => {
    if (m < 1) return [];
    let a = new Array(m);
    a[0] = 1;
    for (let i = 1; i < m; i++) {
        a[i] = a[i - 1] * k;
        if (!isFinite(a[i])) throw new Error(`${k}的${i}次方超出了数据可以表示的范围`)
    }
    return a;
}

// a - z 映射到 0 -25
export const getCharMap = () => {
    let map = {};
    let charCode = 97;
    for(let i = 0; i < 26; i++) {
        map[String.fromCharCode(charCode)] = i;
        charCode++;
    }
    return map;
}

