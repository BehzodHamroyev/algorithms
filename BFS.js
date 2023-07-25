class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Binary {
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

  DFSPreorder() {
    let data = [];
    function recursive(node) {
      data.push(node.value);
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
    }
    recursive(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    function recursive(node) {
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
      data.push(node.value);
    }
    recursive(this.root);
    return data;
  }
  DFSInOrder() {
    let data = [];
    function recursive(node) {
      if (node.left) recursive(node.left);
      data.push(node.value);
      if (node.right) recursive(node.right);
    }
    recursive(this.root);
    return data;
  }
}

let binaryTree = new Binary();
binaryTree.insertion(23);
binaryTree.insertion(33);
binaryTree.insertion(43);
binaryTree.insertion(23);
binaryTree.insertion(3);
binaryTree.insertion(53);
binaryTree.insertion(63);

console.log(binaryTree);
