
/**
 * 生成随机数组
 * 
 * size：数组长度
 * range：随机数数值范围，默认为 0 - 99
 */
export const randomArray = (size, range = 99) => {
    let a = [];
    for(let i = 0; i < size; i++) {
        a.push( parseInt( Math.random() * (range + 1)) );
    }
    return a;
}

// 返回的随机数组的值不重复
export const randomUniqArray = (size, range = 99) => {
    let a = [];
    for(let i = 0; i < size; ) {
        const val = parseInt( Math.random() * (range + 1));

        if ( !a.includes(val) ) {
            a.push(val);
            i++;
        } else {
            continue;
        }
    }
    return a;
}