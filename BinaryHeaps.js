class myMaxBinaryHeaps {
  constructor() {
    this.values = [41, 39, 18, 27, 12, 33];
  }

  insert(value) {
    this.values.push(value);

    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;

    let element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      let parent = this.values[parentIdx];

      if (element <= parent) break;

      this.values[parentIdx] = element;

      this.values[idx] = parent;

      idx = parentIdx;
    }
  }

  extraMax() {
    let max = this.values[0];

    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;

      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;

    const length = this.values.length;

    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;

      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];

      this.values[swap] = element;

      idx = swap;
    }
  }
}

let mx = new myMaxBinaryHeaps();

mx.insert(55);

mx.extraMax();

class MaxBinaryHeaps {
  constructor() {
    this.values = [41, 39, 18, 27, 12, 33];
  }

  insert(value) {
    this.values.push(value);

    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;

    let element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      let parent = this.values[parentIdx];

      if (element <= parent) break;

      this.values[parentIdx] = element;

      this.values[idx] = parent;

      idx = parentIdx;
    }
  }

  extraMax() {
    let max = this.values[0];
    let length = this.values.length;
    let end = this.values[length - 1];
    if (length > 0) {
      this.values[0] = end;
    }
    this.sinkDown();

    return max;
  }

  sinkDown() {
    let element = this.values[0];
    let leftChildIdx, rightChildIdx;
    let leftChild, rightChild;
    let swap = 0;
    while (true) {
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (element < leftChild) {
          this.values[swap] = leftChild;
          swap = leftChildIdx;
        }

      }
    }
  }
}






class Node{
  constructor(value,prio)
}
class myMinBinaryHeaps {
  constructor() {
    this.values = [41, 39, 18, 27, 12, 33];
  }

  insert(value) {
    this.values.push(value);

    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;

    let element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      let parent = this.values[parentIdx];

      if (element <= parent) break;

      this.values[parentIdx] = element;

      this.values[idx] = parent;

      idx = parentIdx;
    }
  }

  extraMax() {
    let max = this.values[0];

    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;

      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;

    const length = this.values.length;

    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;

      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];

      this.values[swap] = element;

      idx = swap;
    }
  }
}