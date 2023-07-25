class PriorityQueue {
  constructor() {
    this.data = [];
  }
  enqueue(node, priority) {
    this.data.push({ node, priority });
    this.data.sort();
  }
  dequeue() {
    return this.data.shift();
  }
  sort() {
    this.data = this.data.sort((a, b) => a.priority - b.priority);
  }
}

class Graph {
  constructor() {
    this.adjencyList = [];
  }

  addVertex(vertext) {
    if (!this.adjencyList[vertext]) this.adjencyList[vertext] = [];
  }
  addEdge(vertext1, vertext2, weight) {
    this.adjencyList[vertext1].push({ node: vertext2, weight });
    this.adjencyList[vertext2].push({ node: vertext1, weight });
  }

  Dijkstara(start, finish) {
    let nodes = new PriorityQueue();
    let distance = {};
    let smallest;
    let previous = {};
    let path = {};
    for (let vertext in this.adjencyList) {
      if (vertext === start) {
        distance[vertext] = 0;
        nodes.enqueue(vertext, 0);
      } else {
        distance[vertext] = Infinity;
        nodes.enqueue(vertext, Infinity);
      }
      previous[vertext] = null;
    }
    while (nodes.data.length) {
      console.log(nodes, "dsf");
      smallest = nodes.dequeue().node;
      console.log(smallest,'sma');
      if (smallest === finish) {
        console.log(smallest);
        // all done
        // console.log(smallest);
        // while (previous[smallest]) {
        //     path.push(smallest);
        //     smallest = previous[smallest];
        // }
        // break;
      }

      if (smallest || distance[smallest] != Infinity) {
        for (let neigbor in this.adjencyList[smallest]) {
          let nextNode = this.adjencyList[smallest][neigbor];
          let candidate = nextNode.weight;
          if (candidate < distance[nextNode.node]) {
            // update smallest distance naighbor
            distance[nextNode.node] = candidate;
            // update previous -how to get neighbor
            previous[nextNode.node] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstara("A", "E");
