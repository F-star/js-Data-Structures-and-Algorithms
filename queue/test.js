import { ArrayQueue } from "./arrayQueue.js";
import { CircleQueue } from "./circleQueue.js";


let queue;
console.log('----------- 顺序队列');

queue = new ArrayQueue(6);

queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8); // 因为队列满了，所以这个入队失败


queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.enqueue(9);
queue.enqueue(10);

queue.print();


console.log('----------- 循环队列');

queue = new CircleQueue(6);  

queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);


queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.enqueue(9);
queue.enqueue(10);


queue.print();