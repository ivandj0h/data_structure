// BINARY SEARCH TREE

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode;
        }
        // if left child, look left again
        else {
          searchTree(node.left);
        }
      }
      // if value > node.value, go right
      else if (value > node.value) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode;
        }
        // if right child, look right again
        else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;

    // continue traversing left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    // continue traversing right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  // depth first search - branch by branch

  // in-order
  // left, root, right
  // 2, 3, 12, 15, 28, 36, 39
  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      // if left child exists, go left again
      if (node.left) traverse(node.left);
      // capture root node value
      result.push(node.value);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  // pre-order
  // root, left, right
  // 15, 3, 2, 12, 36, 28, 39
  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      // capture root node value
      result.push(node.value);
      // if left child exists, go left again
      if (node.left) traverse(node.left);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  // post-order
  // left, right, root
  // 2, 12, 3, 28, 39, 36, 15
  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      // if left child exists, go left again
      if (node.left) traverse(node.left);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
      // capture root node value
      result.push(node.value);
    };

    traverse(this.root);

    return result;
  }

  // breadth first search - level by level

  // use a queue!
  // 15, 3, 36, 2, 12, 28, 39
  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

bst.size();

bst.min();
bst.max();

bst.contains(2);
bst.contains(9);

// DFS!!!
// in-order: 2, 3, 12, 15, 28, 36, 39
bst.dfsInOrder();

// pre-order: 15, 3, 2, 12, 36, 28, 39
bst.dfsPreOrder();

// post-order: 2, 12, 3, 28, 39, 36, 15
bst.dfsPostOrder();

// BFS!!!
// 15, 3, 36, 2, 12, 28, 39
bst.bfs();
