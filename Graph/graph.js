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


// Adjacent List conexiones por indice en arrays
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
const graph = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0],
}

// GRAPH NO DIRIGIDO A TRAVES DE UN ADJACENT LIST - ARRAY DE ARRAYS 

class Graph {
  constructor() {
    this.adjacentList = {};
  }
  
  addVertex(vertex) {
    
  }
  
  addEdge() {
    
  }
}