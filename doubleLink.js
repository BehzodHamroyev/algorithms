class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let oldTail = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
    }
    this.length--;
    oldTail.prev = null;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length == 1) {
      this.head = this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
    }
    this.length--;
    oldHead.next = null;
    return oldHead;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 && index == this.length) return null;
    let middle = Math.floor(this.length / 2);
    let count, current;
    if ((middle) => index) {
      count = 0;
      current = this.head;
      while (index != count) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (index != count) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  remove(index) {
    if (index < 0 && index == this.length) return null;
    if (index == 0) this.shift();
    if (index == this.length - 1) this.pop();
    let removeItem = this.get(index);
    removeItem.next.prev = removeItem.prev;
  }

  findMax() {
    let count = 0;
    let index = 0;
    let max = this.head.val;
    let current = this.head;
    while (this.length > count) {
      if (max < current.val) {
        max = current.val;
        index = count;
      }
      current = current.next;
      count++;
    }
    return { index, max };
  }
}

let double = new DoubleLinked();
double.push(2);
double.push(6);
double.push(23);
double.push(1);
// double.pop();
// double.shift();
console.log(double.findMax());
