class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // BFS() {
  //   var node = this.root,
  //     data = [],
  //     queue = [];
  //   queue.push(node);

  //   while (queue.length) {
  //     node = queue.shift();
  //     data.push(node.value);
  //     if (node.left) queue.push(node.left);
  //     if (node.right) queue.push(node.right);
  //   }
  //   return data;
  // }

  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.unshift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }


  
}

let binary = new BinarySearchTree();

binary.insert(21);
binary.insert(14);
binary.insert(31);
binary.insert(17);
binary.insert(1);
binary.insert(10);
binary.insert(12);
console.log(binary.BFS());
// console.log(binary);
