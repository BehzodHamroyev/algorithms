class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySort {
  constructor() {
    this.root = null;
  }

  insertion(value) {
    if (value != undefined) {
      var newNode = new Node(value);
    }
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (true) {
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(value) {
    if (value == undefined) {
      return false;
    }
    if (!this.root) {
      return undefined;
    }

    let find = false;
    let current = this.root;

    while (current && !find) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else {
        find = true;
      }
    }
    if (find) {
      return current;
    } else {
      return false;
    }
  }
}
let sort = new BinarySort();
sort.insertion(12);
sort.insertion(22);
sort.insertion(2);
sort.insertion(32);
sort.insertion(52);

console.log(sort.find(22));


let arr=[2,3,45,1]
console.log(Math.max(...arr));




console.log(parseInt('123',2))
