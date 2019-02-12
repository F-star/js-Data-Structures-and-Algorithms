import { createData } from "./data.js";
import { HashTable } from "./hashMap.js";

let data = createData(20);
console.log(data);
const hash = new HashTable(40);   // 必须为40个，因为学号的结尾范围为 0 - 40

// hash.put(data[0]);
hash.init(data);

console.log('初始化：', hash.toString());
console.log('移除一个数据', hash.remove(data[10].id));
console.log(`查找一个 id 为${data[12].id}的数据：`, hash.find(data[12].id));

window.hash = hash;