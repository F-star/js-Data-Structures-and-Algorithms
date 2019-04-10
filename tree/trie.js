/**
 * Trie 树，又称“字典树”
 * Trie 树的本质，就是利用字符串之间的公共前缀，将重复的前缀合并在一起
 * 
 * 假设字符只有 a-z 共 26 个字符。
 * 散列表存储。
 */


export function Trie() {
    this.root = new TrieNode('/');
    // this.init(array);
};

function TrieNode(data) {
    this.data = data            // 这里保存一个字符
    this.children = new Array(26)    // Array<TrieNode> 
}



Trie.prototype = {
    // 插入字符串到trie 树中。

    insert(str) {
        let p = this.root;
        // console.log(p)
        const ascii_a = 'a'.charCodeAt();
        for(let i = 0, len = str.length; i < len; i++) {
            // this.node = this.root.children
            const index = str[i].charCodeAt() - ascii_a;
            // console.log(p)
            if (p.children[index] == null) {
                p.children[index] = new TrieNode(str[i]);
            } 
            p = p.children[index];
        }
        p.isEndingChar = true;  // 表示到结尾为该结点的字符串，是完整的字符串，而不仅仅只是前缀。
    },

    // 检测一个字符串是否在 trie 树内。（注意不是前缀匹配）
    find(str) {
        // 1. 找到 prefix 的最后一个字符对应的 结点。
        let p = this.root;
        const ascii_a = 'a'.charCodeAt();
        for (let i = 0, len = str.length; i < len; i++) {
            const index = str[i].charCodeAt() - ascii_a;
            p = p.children[index];
            if (p == null) return false;
        }
        if (p.isEndingChar == true) return true;
        else return false;
    },


    // 前缀匹配
    prefixMatch(prefix, size) {
        let p = this.root;
        const ascii_a = 'a'.charCodeAt();
        for (let i = 0, len = str.length; i < len; i++) {
            const index = str[i].charCodeAt() - ascii_a;
            p = p.children[index];
            if (p == null) return false;
        }

        // p 的children 进行遍历。。。
        // 广度优先遍历。
        const queue = [];
        

    },
}

// 加强版 trie： 缩点优化。