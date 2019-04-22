> 基于 Javascript 实现的数据结构和算法。

使用了 ES6 的模块化语法。

## 已实现的数据结构和算法

#### 链表
- 单链表
- 单链表（有哨兵结点）
- LRU 缓存算法（单链表实现）

#### 栈
- 栈

#### 队列
- 顺序队列
- 链式队列（暂时不打算实现，本质是操作受限的链表，可以参考单链表实现代码，不过要追加一个 tail 指针）
- 循环队列

#### 图
- 邻接矩阵（未实现）
- 邻接表
- 广度优先搜索（BFS）
- 深度优先搜索（DFS）

#### 排序算法
- 冒泡排序
- 插入排序（从尾往头插入）
- 选择排序
- 归并排序
- 桶排序（暂不打算实现）
- 计数排序
- 基数排序
- 堆排序

#### 查找算法
- 二分法（简单实现，提供的数组没有重复元素）
- 平方根算法（通过二分法实现，但js浮点数精度导致的问题暂未修复）

#### 树
- 二叉树
- 二叉查找树（不支持重复数据）
- 堆
- Trie 树

#### 散列表
- 简单散列表（未考虑扩容；可能有bug，情况太多，测试比较麻烦）

#### 字符串匹配算法

- BF 算法（暴力匹配算法）
- RK 算法（实现的算法只支持字符串的字符集在 a - z 范围）
- BM 算法（实现有点复杂，暂时不实现）

#### 贪心算法

- 区间覆盖（最大不相交覆盖）

#### 其他

- 求第 K 大元素
- TopK 算法

## TODO

- 检验一个数组是否为堆的方法。（测试用）
- 图的可视化（尤其是邻接表）

## 其他编程语言实现

https://github.com/wangzheng0822/algo