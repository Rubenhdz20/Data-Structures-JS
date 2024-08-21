// LOGICA CONSTRUIDA DE UN TREE ATRAVES DE CLASES 


//      10 root 
//   4     20 Parent 
// 2  8  17  170 leaf

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left; // recorre el valor para poder seguir validando y moviendonos en el arbol                   
        } else {
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  
  search(value) {
    let current = this.root;
    while( current && current.value != value ) {
      if( value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }
  
  // To handle the three main cases (leaf node, one child, and two children) effectively, we need to modify the function to reassign    the child nodes appropriately
  
  // Helper function to find the minimum value node in a tree
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  
  // Function to delete a node with a given value
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  
  deleteNode(node, value) {
    // Base case: if the tree is empty
    if (node === null) {
      console.error("The node is not in the tree");
      return node;
    }

    // Recursively traverse the tree
    if (value < node.value) {
      // The result of the recursive call is assigned back to node.left to ensure that any changes (like deletion or restructuring)         are correctly reflected in the tree structure.
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Node to be deleted found

      // Case 1: Node with no children (leaf node)
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // Case 2: Node with one child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Case 3: Node with two children
      // Get the in-order successor (smallest in the right subtree)
      const tempNode = this.findMinNode(node.right);
      node.value = tempNode.value;

      // Delete the in-order successor
      node.right = this.deleteNode(node.right, tempNode.value);
    }

    return node;
  }
  
  
  delete(value) {
    if(!this.root) {
      return console.error("The Binary Search Tree is empty");
    }
    
    if(value === this.root.value) {
      delete this.root;
      return this;
    }
    //Usaremos el pointer para movernos por el arbol, empezando desde la raiz
    let pointer = this.root;
    //Mientras el pointer no sea null, se hara este ciclo
    while(pointer) {
      if(value < pointer.value) { 
        //Comprobamos que el nodo isq no este vacio
			  //Y despues, si el valor se encuentra en el nodo isq
        if(pointer.left && value === pointer.left.value) {
           pointer.left = null;   
           return this;
        }
        pointer = pointer.left;
      } else {
         if(pointer.rigth && value === pointer.rigth.value) {
           pointer.rigth = null;
           return this;
         }
        pointer = pointer.rigth;
      }
    }
    
    if(!pointer) {
      return console.error("The node is not in the tree");
    }
  } 
  
}

const tree = new BinarySearchTree();
