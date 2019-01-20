/**
 * 检查是否为回文结构（待完成
 * 
 * @param {*} list 字符有序集（通过单链表储存）
 */




// 检测单链表是否为回文结构

// const str = 'abcdcba';

// for (let i = 0, len = str.length; i < len; i++) {
//     list.append(str[i])
// }

// console.log(list.toString());

// console.log('???')
export const checkoutPalindrome = (list) => {
    const size = list.size;
    const halfSize = size / 2;

    // 0   size - 1   移动 size - 1
    // 1   size - 2   移动 size - 3
    // 2   size - 3   移动 size - 5
    // size / 2   

    // for (let i = 0; i < size / 2; i++) {
    //     const left = list.head;
    //     for () {

    //     }
    // }
}

// checkoutPalindrome(list);