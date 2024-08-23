// LOGICA CONSTRUIDA DE UN GRAPH ATRAVES DE CLASES 


// FORMAS DE REPRESENTAR A UN GRAPH 

//   2 - 0
//  / \
// 1 - 3

// Edge List representa las conexiones que existen en arrays 

let graph1 = [
  [0,2], 
  [2,3], 
  [2,1], 
  [1,3]
];

//Adjacent List = conexiones representados en un objeto con relacion indice(key):arrays(value)
//              0     1       2       3
const graph2 = [[2], [2,3], [0,1,3], [1,2]];

//Objeto o Hash Table 

const graph3 = {
  0: [2],
  1: [2,3],
  2: [0,1,3], 
  3: [1,2]
}


// Adjacent Matrix (Ponderados o No Ponderados) de manera binaria

// Array de arrays 
const graph4 = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0],
]

// Objetos o hash tables
const graph41 = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0],
}

// GRAPH NO DIRIGIDO(Todos los nodos tienen doble direccio) A TRAVES DE UN ADJACENT LIST 

const graph22 = {
  0: [2],
  1: [2,3],
  2: [0,1,3], 
  3: [1,2]
}

class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }
  
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const MyGraph = new Graph();

// FORMA ALTERNA DE HACER GRAFOS 

class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}
      
class Edge {
  constructor(nodeFrom, nodeTo){
    this.nodeFrom = nodeFrom;
    this.nodeTo = nodeTo;
  }
}

class Graph{
  constructor(nodes = [], edges = []) {
    this.nodes = nodes;
    this.edges = edges;
  }

  insertNode(value){
    this.nodes.push(new Node(value));
  }

  insertEdge(fromValue, toValue){
    let fromFound = null;
    let toFound = null;

    this.nodes.forEach( node => {
      if(fromValue === node.value){
        fromFound = node;
      }

      if(toValue === node.value){
        toFound = node;  
      }
    })

    if(!fromFound){
      fromFound = new Node(fromValue);
      this.nodes.push(fromFound);
    }

    if(!toFound){
      toFound = new Node(toValue);
      this.nodes.push(toFound);
    }

    const newEdge = new Edge(fromFound, toFound);
    fromFound.edges.push(newEdge);
    toFound.edges.push(newEdge);
    this.edges.push(newEdge);
  }

  getEdgeList(){
    const edgeList = [];
    for(let edge of this.edges) {
      edgeList.push([edge.nodeFrom.value, edge.nodeTo.value])
    }
    return edgeList;
  }

  getAdjacencyList(){
    const maxIndex = this.edges.length;
    // Create a list with maxIndex +1 elements, all null
    const adjacencyList = Array.from(new Array(maxIndex+1), x => null);

    for(let edge of this.edges){
      if(adjacencyList[edge.nodeFrom.value]) {
        adjacencyList[edge.nodeFrom.value].push(edge.nodeTo.value);
      }

      else{
        adjacencyList[edge.nodeFrom.value] = [edge.nodeTo.value];
      }
    }
    return adjacencyList;
  }

  getAdjacencyMatrix(){
    const len = this.nodes.length + 1;
    //Create a matrix of dimensions len x len, filled with zeros 
    const adjacencyMatrix = Array.from(new Array(len), x => new Array(len).fill(0));

    for(let edge of this.edges) {
      adjacencyMatrix[edge.nodeFrom.value][edge.nodeTo.value] = 1;
    }

    return adjacencyMatrix
  }
}

const graph = new Graph()
graph.insertEdge(1,2)
graph.insertEdge(1,3)
graph.insertEdge(1,4)
graph.insertEdge(3,4)

// Should be [[1, 2], [1, 3], [1, 4], [3, 4]]
console.log(graph.getEdgeList())
// Should be [ null, [ 2, 3, 4 ], null, [ 4 ], null ]
console.log(graph.getAdjacencyList())
// Should be [[0,0,0,0,0],[0,0,1,1,1],[0,0,0,0,0],[0,0,0,0,1],[0,0,0,0,0]]
console.log(graph.getAdjacencyMatrix())