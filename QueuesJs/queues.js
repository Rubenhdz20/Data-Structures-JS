// LOGICA CONSTRUIDA DE UN QUEUE(COLA) ATRAVES DE CLASES - FIFO - FIRST IN FIRST OUT


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  
  peek() { // selecciona un elemento siendo este siempre el primero que se agrega
    return this.first;
  }
  
  // siempre es importante que al trabajar con metodos hacer validaciones 
  // agrega un elemento al final de la linea 
  
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode; // Link the new node to the end of the queue
      this.last = newNode; // Set the new node as the last node
    }
    this.length++;
    return this;
  }
  
  // 3 <-- 2(last) <-- 1(first)
  // newNode <-- newNode(last) <-- 3 <-- 2 <-- 1(first)
  
  dequeue() {
     if (!this.first) {
       return null;
     }

     if (this.first === this.last) {
       this.last = null;
     }
    
    this.first = this.first.next; // Move the first pointer to the next node
    this.length--;
    return this;
  }
}

// 3 <-- 2(last) <-- 1(first)

const myQueue = new Queue();
myQueue.enqueue(4);
myQueue.enqueue(2);
myQueue.enqueue(0);
myQueue.dequeue();

// Despues de hacer enqueue 

// Queue {top: Node, bottom: Node, length: 3}
// bottom: Node
// next: null
// value: 0

// top: Node
// next: Node {value: 2, next: Node}
// value: 4


// Despues de hacer dequeue

// Queue {top: Node, bottom: Node, length: 2}
// bottom: Node
// next: null
// value: 0

// top: Node
// next: Node {value: 0, next: Null}
// value: 2

