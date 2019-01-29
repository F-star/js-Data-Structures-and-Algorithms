
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