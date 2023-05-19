/**
 * 二叉树 数据结构：
 *
 * const BinaryTreeNode = {
 *   id: 该结点的 id
 *   data: 该结点上的数据
 *   level: 该结点所在的层数
 *   id_lchild: 指向该结点的左孩子结点的 id
 *   id_rchild：指向该结点的右孩子结点的 id
 *   children: 该结点的孩子结点
 * }
 */

// 对象 tree，表示一颗二叉树
const tree = {
  id: 0,
  data: "A",
  level: 1,
  id_lchild: 1,
  id_rchild: 2,
  children: {
    1: {
      id: 1,
      data: "B",
      level: 2,
      id_lchild: 3,
      id_rchild: 4,
      children: {
        3: {
          id: 3,
          data: "C",
          level: 3,
          id_lchild: null,
          id_rchild: null,
          children: null,
        },
        4: {
          id: 4,
          data: "E",
          level: 3,
          id_lchild: 7,
          id_rchild: 8,
          children: {
            7: {
              id: 7,
              data: "H",
              level: 4,
              id_lchild: null,
              id_rchild: null,
              children: null,
            },
            8: {
              id: 8,
              data: "I",
              level: 4,
              id_lchild: null,
              id_rchild: null,
              children: null,
            },
          },
        },
      },
    },
    2: {
      id: 2,
      data: "D",
      level: 2,
      id_lchild: 5,
      id_rchild: 6,
      children: {
        5: {
          id: 5,
          data: "F",
          level: 3,
          id_lchild: null,
          id_rchild: null,
          children: null,
        },
        6: {
          id: 6,
          data: "G",
          level: 3,
          id_lchild: 9,
          id_rchild: null,
          children: {
            9: {
              id: 9,
              data: "J",
              level: 4,
              id_lchild: null,
              id_rchild: null,
              children: null,
            },
          },
        },
      },
    },
  },
};

// 利用 队列，对 二叉树，进行 层次遍历
const printTree = (binaryTree) => {
  // 如果没有传参 或者 传入了 {} 的实参，则 return
  if (!binaryTree) return;
  if (!Object.hasOwn(binaryTree, "id")) return;

  // --- 创建一个队列 ---
  const queue = [];

  // 对象 result 用来存放访问二叉树结点时的过程
  let result = {};

  // 根结点入队
  queue.push(binaryTree);

  // 如果队列不空: 出队一个结点、访问、左孩子入队、右孩子入队
  while (queue.length) {
    // 出队一个结点
    const node = queue.shift();

    // 访问该结点
    if (!result[node.level]) {
      result[node.level] = [node.data];
    } else {
      result[node.level].push(node.data);
    }

    // 左孩子入队
    if (node.id_lchild) {
      queue.push(node.children[node.id_lchild]);
    }

    //右孩子入队
    if (node.id_rchild) {
      queue.push(node.children[node.id_rchild]);
    }
  }

  // 定义一个返回结果字符串
  let resString = "";

  // 对 result 遍历
  for (k in result) {
    resString += `${k} ${result[k].join("")} \n`;
  }

  return resString;
};

// 按需导出
module.exports.tree = tree;
module.exports.printTree = printTree;
