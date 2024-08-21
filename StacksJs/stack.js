// LOGICA CONSTRUIDA DE UN STACK(PILA) ATRAVES DE CLASES - LIFO - LAST IN FIRST OUT 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  
  peek() { // selecciona un elemento siendo este siempre el ultimo que se agrega
    return this.top;
  }
  
  // siempre es importante que al trabajar con metodos hacer validaciones 
  push(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top; 
      this.top = newNode; // Step 6: Set the new node as the top node
      this.top.next = holdingPointer; // Step 7: Link the new top node to the previous top node
    }
    this.length++;
    return this;
  }
  
  // 1(top) --> 2 --> 3(bottom) --> 
  // newNode(0) --> HoldingPointer(1) --> 2 --> 3(bottom)
  
  pop() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      return this;
    } else {
      // guardamos el elemento que esta debajo del top 
      const lastElement = this.top.next;
      this.top = lastElement;
    }
    this.length--;
    return this;
  }
  
   // 1(top) --> 2(top.next) --> 3(bottom) --> Null(bottom.next)
  // 2(top) --> 3(bottom) --> Null(bottom.next)
    
}

const myStack = new Stack();
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.pop();

// Stack inicializada 

// Stack {top: null, bottom: null, length: 0}
// bottom: null
// length: 0
// top: null

// Agregando el primer Nodo: suponiendo .push(4)

// Stack {top: Node, bottom: Node, length: 1}
// Bottom: Node
// next: null
// value: 4

// Top: Node
// next: null 
// value: 4
  
// Agregando el segundo Nodo: suponiendo .push(5)

// Stack {top: Node, bottom: Node, length: 2}
// Bottom: Node
// next: null
// value: 4

// Top: Node
// next: Node ({value: 4, next: null}) 
// value: 5

