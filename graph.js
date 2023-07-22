class Graph {
  constructor() {
    this.adjecencyList = {};
  }

  addVertext(vertext) {
    return (this.adjecencyList[vertext] = []);
  }

  addEdge(vertex1, vertext2) {
    this.adjecencyList[vertex1].push(vertext2);
    this.adjecencyList[vertext2].push(vertex1);
  }

  removeEdge(vertext1, vertext2) {
    this.adjecencyList[vertext1] = this.adjecencyList[vertext1].filter(
      (v) => v != vertext2
    );
    this.adjecencyList[vertext2] = this.adjecencyList[vertext2].filter(
      (v) => v != vertext1
    );
  }

  removeVertext(vertext) {
    while (this.adjecencyList[vertext].length) {
      let removeVertext = this.adjecencyList[vertext].pop();
      this.removeEdge(vertext, removeVertext);
    }
    delete this.adjecencyList[vertext];
  }
}

const graph = new Graph();
graph.addVertext("Uzbekiston");
graph.addVertext("yaponiya");
graph.addVertext("xitoy");
graph.addVertext("rossiya");
graph.addVertext("germaniya");
graph.addVertext("amerika");
graph.addEdge("Uzbekiston", "yaponiya");
graph.addEdge("xitoy", "Uzbekiston");
graph.addEdge("germaniya", "Uzbekiston");
graph.addEdge("amerika", "Uzbekiston");

// graph.removeEdge("Uzbekiston", "yaponiya");
graph.removeVertext("Uzbekiston");
// console.log(graph.adjecencyList[]);
console.log(graph.adjecencyList);
