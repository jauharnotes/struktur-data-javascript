// Implementasi Graph dengan function
function createNode(key) {
  const neighboars = [];
  return {
    // key
    key,
    // neighboars
    neighboars,
    // add neighboars: function(node){}
    addNeighboars: function (node) {
      neighboars.push(node);
    },
  };
}

function createGraphs(directed = false) {
  const nodes = [];
  const edges = [];
  return {
    directed,
    nodes,
    edges,

    // addNode: function(){}
    addNode: function (key) {
      const newNode = createNode(key);
      nodes.push(newNode);
    },
    // getNode: function(){}
    getNode: function (key) {
      return nodes.find(function (node) {
        return node.key === key;
      });
    },
    // addEdge: function(){}
    addEdge: function (node1Key, node2Key) {
      const node1 = this.getNode(node1Key);
      const node2 = this.getNode(node2Key);

      if (!directed) {
        node2.addNeighboars(node1);
      } else {
        node1.addNeighboars(node2);
      }
    },
    // print: function(){}
    print: function () {
      return nodes
        .map(function ({ key, neighboars }) {
          let result = key;

          if (neighboars.length) {
            result += `=> ${neighboars
              .map(function (neighboars) {
                return neighboars.key;
              })
              .join(" ")}`;
          }
          return result;
        })
        .join(`\n`);
    },
  };
}

// implementasi code
const graphs = createGraphs(true);
graphs.addNode("ani");
graphs.addNode("banu");
graphs.addNode("cindy");
graphs.addNode("dina");
graphs.addNode("fadli");
graphs.addNode("elisa");

graphs.addEdge("ani", "banu");
graphs.addEdge("banu", "cindy");
graphs.addEdge("banu", "dina");
graphs.addEdge("ani", "dina");
graphs.addEdge("dina", "fadli");
graphs.addEdge("elisa", "fadli");
graphs.addEdge("fadli", "ani");

console.log(graphs.print());

console.log("=================================");

// Implementasi Graph dengan class
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }
  addVertex(v) {
    this.AdjList.set(v, []);
  }
  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }
  printGraph() {
    const getKeys = this.AdjList.keys();
    for (let i of getKeys) {
      const getValues = this.AdjList.get(i);
      let consc = "";

      for (let j of getValues) {
        consc += j + " ";
        console.log(i + " -> " + consc);
      }
    }
  }
}

// Using the above implemented graph class
const g = new Graph(6);
const vertices = ["ani", "banu", "cindy", "dina", "fadli", "elisa"];

// adding vertices
for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("ani", "banu");
g.addEdge("banu", "cindy");
g.addEdge("banu", "dina");
g.addEdge("ani", "dina");
g.addEdge("dina", "fadli");
g.addEdge("elisa", "fadli");
g.addEdge("fadli", "ani");

g.printGraph();
