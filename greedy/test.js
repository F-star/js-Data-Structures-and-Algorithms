import { intervalCover } from "./intervalCover.js";

// 一些用到贪心算法的练习


const interval = [
    [6, 8],
    [2, 4],
    [3, 5],
    [1, 5],
    [5, 9],
    [8, 10],
];

console.log( intervalCover(interval) );
