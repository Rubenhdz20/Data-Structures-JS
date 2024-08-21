// LOGICA CONSTRUIDA DE UNA LINKED LIST ATRAVES DE CLASES 

// 1-- > 2-- > 3-- > 4-- > 5-- > null;

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

// se crea la clase Nodo, ya que cada que cree un metodo 
// en la que se necesite inicializar un Nodo, puedo usar esta clase 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    
    this.tail = this.head;

    this.length = 1;
  }
  
  append(value) { // add to the end 
    const nextNode = new Node(value);
    this.tail.next = nextNode; 
    this.tail = nextNode;
    this.length++;
    return this;
  }
  
  // 1-- > 2-- > 3-- > 4-- > 5-- > value(tail) --> null(tail.next);
  
  prepend(value) { // add to the beginning 
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    return this;
  }
  
  //  0(head) --> 1(head.next) --> 2 --> 3 --> 4 --> 5 --> 6 --> null;
  
  insert(index, value) {
    // validaciones 
    if(index >= this.length) {
      return this.append(value);
      console.log('No hay suficientes elementos en la lista');
    }
    
    if (index === 0) {
      return this.prepend(value);
    }
    
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    
    this.length++;
    
    return this;
  }
    // 0(head) --> 1(head.next) --> 2 --> insert --> 3 --> 4 --> 5 --> 6(tail) --> null(tail.next);
    // localizar el nodo anterior 
    // desplazar el nodo existente en el que queremos meter al Nodo 
    // no debemos dejar al Nodo desplazado sin pointer 
  
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  
    // este metodo va a iterar en cada nodo a traves de un contador y una variable que apuntara 
    // a la cabeza del nodo  
  
  remove(index) {
    if(index == 0) {
      const newHead = this.head.next;
      this.head = newHead; 
    } else {
      const firstPointer = this.getTheIndex(index - 1);
      const newNext = this.getTheIndex(index + 1);
      firstPointer.next = newNext;
    }
    
    this.length--;
    return this;
  }
    // 0(head) --> 1(head.next) --> 2(prev) --> 9 --> 3(holding) --> 4 --> 5 --> 6(tail) --> null(tail.next);
    // si quiero borrar tengo que actualizar los valores tanto del anterior Nodo como del siguiente 
    // previous.next = holdingpointer;
    // holdingpointer = 
}

1-- > null;

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(4);
