import { createData } from "./data.js";
import { HashTable } from "./hashMap.js";

let data = createData(20);
console.log('源数据：', data);
const hash = new HashTable(40);   // 必须为40个，因为学号的结尾范围为 0 - 40

// hash.put(data[0]);
hash.init(data);
console.log(`移除一个id为 ${data[10].id} 数据`, hash.remove(data[10].id));
console.log(`查找一个id为 ${data[12].id} 的数据：`, hash.find(data[12].id));

hash.put({id: 113})
hash.put({id: 213})
hash.put({id: 313})
hash.remove(213)

console.table(hash.toString())
window.hash = hash;


// put 方法有问题。