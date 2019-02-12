

// 生成 3 位数不重复学号，第一位为班级（0 -- 6），后两位为班级内排序id（id不超过40）
export function createData(n = 50) {
    let array = [];

    for (let i = 0; i < n;) {

        let a = Math.floor(Math.random() * 7),
            b = Math.floor(Math.random() * 41),
            random = a + ('' + b).padStart(2, '0');
        
        if ( !array.includes(random)) {
            array.push({
                id: random
            });
            i++;
        }
    }
    return array;
}
