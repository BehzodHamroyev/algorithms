class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    var current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  get(index) {
    if (index < 0 || this.length < index) return null;
    var counter = 0;
    var currentEle = this.head;

    while (counter != index) {
      counter++;
      currentEle = currentEle.next;
    }
    return currentEle;
  }
  set(index, value) {
    var element = this.get(index);
    if (element) {
      element.val = value;
    }
    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index == this.length) {
      this.push(value);
      return true;
    }
    if (!this.head) {
      this.unshift(value);
      return true;
    }
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
    // ........ davomi bor
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }











} 

const list = new singlyLinkedList();
list.push("salom");
list.push("alik");
list.push("aliks");
list.push("aliks niiqheih");

// console.log(list.shift());
// console.log(list.get(2));
// console.log(list.set(2, "qoshi qalam"));
console.log(list.remove(2));
