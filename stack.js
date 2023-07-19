class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    return this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    // console.log(this.data[this.data.length - 1]);
    return this.data[this.data.length - 1];
  }
}

let stack = new Stack();
stack.push(12);
stack.push(2);
stack.push(32);
stack.push(2);
stack.pop();

class Queues {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }
  add(value) {
    this.first.push(value);
  }

  remove() {
    // let record = this.first.pop();
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

let queues = new Queues();

queues.add(2);
queues.add(12);
queues.add(32);
queues.add(22);
queues.remove();

console.log(queues.peek());
