// LOGICA CONSTRUIDA DE UNA DOBLE LINKED LIST ATRAVES DE CLASES 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null
  }
}

class MyDoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value, 
      next: null, 
      prev: null,
    };
    
    this.tail = this.head; 
    
    this.length = 1; 
  }
  
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode; 
    this.tail = newNode;
    this.length++;
    return this;
  }
    // remember that with this method we would like to add an element to the end 
    // 1 --> 2 --> 3 --> 4 --> 5(tail.value) --> null(tail.next);
    // 1 --> 2 --> 3 --> 4 --> 5(newNode.prev) --> newNode(tail.value) -->  newNode(tail.next);
    
  prepend(value) { // add to the beginning 
    const newNode = new Node(value);
    this.head.prev = newNode; 
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    return this;
  }
    // 1(head.value) --> 2(head.next) --> 3 --> 4 --> 5(tail.value) --> null(tail.next);
    // 0(newNode) --> 1(newNode.next) --> 2 --> 3 --> 4 --> 5(tail.value) --> null(tail.next);
  
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
    newNode.prev = firstPointer;
    const holdingPointer = firstPointer.next;
    holdingPointer.prev = newNode;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    
    this.length++;
    
    return this;
  }
    // localizar el nodo anterior 
    // desplazar el nodo existente en el que queremos meter al Nodo 
    // no debemos dejar al Nodo desplazado sin pointer 
    // 0(head) --> 1(head.next) --> 2(firstPointer) -->  3 --> 4(holdingPointer) --> 5 --> 6(tail) --> null(tail.next);
    // 0(head) --> 1(head.next) --> 2(firstPointer) --> newNode --> 3(holdingPointer) --> 4 --> 5 --> 6(tail) --> null(tail.next);
  
  getTheIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
   }
  
   remove(index) {
    if(index >= this.length) {
      console.error("index is out of limits of the array");
    } else if(index == 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    } else if(index  === this.length - 1) {
      const firstPointer = this.getTheIndex(index - 1);
      firstPointer.next = null;
      this.tail = firstPointer;
      this.length--;
    } else {
      const firstPointer = this.getTheIndex(index - 1);
      const pointerToRemove = firstPointer.next;
      const nextToPointerToRemove = pointerToRemove.next;
      nextToPointerToRemove.prev = firstPointer;
      firstPointer.next = nextToPointerToRemove;
      this.length--;
    }
    return this;
  }
  
  getNode(index){
    const middlePoint = Math.floor(this.length / 2);

    if (index > this.length - 1) {//Makes sure the index don't overflow.
        return null;
    } else if (index < middlePoint) { //Checks whether the index given is closer to the head or the tail.
        let currentNode = this.head;
        let counter = 0;
        while(counter != index){ //Runs until it gets to the index given. 
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    } else if (index > middlePoint) {
        let currentNode = this.tail;
        counter = this.length - 1; //Last index
        while(counter != index){
          currentNode = currentNode.previous;
          counter--;
        }
        return currentNode;
    }
  }
} 

let myDoubleLinkedList = new MyDoubleLinkedList(1);
