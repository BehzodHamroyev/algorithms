// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(vertex, priority) {
//     this.values.push({ vertex, priority });
//     this.sort();
//   }

//   dequeue() {
//     return this.values.shift();
//   }

//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

// class WeightGraph {
//   constructor() {
//     this.adjencyList = {};
//   }

//   addVertext(vertext) {
//     if (!this.adjencyList[vertext]) this.adjencyList[vertext] = [];
//   }

//   adge(vertext1, vertext2, weight) {
//     this.adjencyList[vertext1].push({
//       node: vertext2,
//       weight,
//     });
//     this.adjencyList[vertext2].push({
//       node: vertext1,
//       weight,
//     });
//   }

//   Dijistra(start, finish) {
//     let nodes = new PriorityQueue();
//     let distance = {};
//     let privious = {};
//     let smallest;
//     let path = [];

//     // initial state
//     for (let vertex in this.adjencyList) {
//       if (vertex == start) {
//         distance[vertex] = 0;
//         nodes.enqueue(vertex, 0);
//       } else {
//         distance[vertex] = Infinity;
//         nodes.enqueue(vertex, Infinity);
//       }
//       privious[vertex] = null;
//     }
//     // console.log(distance, nodes);
//     while (nodes.values.length) {
//       smallest = nodes.dequeue().vertex; // PriorityQueue bundan eng kichik qaytaradi
//       if (smallest == finish) {
//         while (privious[smallest]) {
//           path.push(smallest);
//           smallest = previous[smallest];
//         }
//         //  we are done
//         break;
//       }

//       if (smallest || distance[smallest] !== Infinity) {
//         for (let neighbor in this.adjencyList[smallest]) {
//           // nextNode
//           let nextNode = this.adjencyList[smallest][neighbor];
//           // calculate
//           let candidate = distance[smallest] + nextNode.weight;
//           // put this weight to nodes
//           console.log(candidate);
//           let nextNeighbor = nextNode.node;
//           if (candidate < distance[nextNeighbor]) {
//             //updating new smallest distance to neighbor
//             distance[nextNeighbor] = candidate;
//             //updating previous - How we got to neighbor
//             // previous[nextNeighbor] = smallest;
//             //enqueue in priority queue with new priority
//             nodes.enqueue(nextNeighbor, candidate);
//           }
//         }
//       }
//     }
//     return path;
//   }
// }

// let weight = new WeightGraph();
// weight.addVertext("A");
// weight.addVertext("B");
// weight.addVertext("C");
// weight.addVertext("D");
// weight.addVertext("E");
// weight.addVertext("F");

// weight.adge("A", "B", 4);
// weight.adge("A", "C", 2);
// weight.adge("B", "E", 3);
// weight.adge("C", "D", 2);
// weight.adge("C", "F", 4);
// weight.adge("D", "E", 3);
// weight.adge("D", "F", 1);
// weight.adge("E", "F", 1);
// // weight.Dijistra("A", "E");
// console.log(weight.Dijistra("A", "E"));

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    // we need five variables
    const nodes = new PriorityQueue(); //we need this variable which save distence from start to
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END

        console.log(previous);
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      console.log(distances[smallest]);
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    console.log(distances, nodes);
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
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

console.log(graph.Dijkstra("A", "E"));

// // ["A", "C", "D", "F", "E"]
