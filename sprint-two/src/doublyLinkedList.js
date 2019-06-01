const DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

DoublyLinkedList.prototype.addToHead = function(value){
  const newNode = Node(value);
  let currentHead = this.head;
  this.head = newNode;
  this.head.next = currentHead;
  if (currentHead){
    currentHead.prev = this.head;
  }else {
    this.tail = this.head;
  }
  this.size++;
}

DoublyLinkedList.prototype.addToTail = function(value){
  const newNode = Node(value);
  let currentTail = this.tail;
  this.tail = newNode;
  this.tail.prev = currentTail;
  if (currentTail){
    currentTail.next = this.tail;
  }else {
    this.head = this.tail;
  }
  this.size++;
}

DoublyLinkedList.prototype.removeHead = function(){
  if (this.head === null){
    return;
  }
  const currentHead = this.head.value;
  this.head = this.head.next;
  this.size--;
  return currentHead;
}

DoublyLinkedList.prototype.removeTail = function(){
  if (this.tail === null){
    return;
  }
  const currentTail = this.tail.value;
  this.tail = this.tail.prev;
  this.size--;
  return currentTail;
}

DoublyLinkedList.prototype.contains = function(value){
  if (this.size === 0){
    return false;
  }
  let currentNode = this.head;
  for (let i = 0; i < this.size; i++){
    if (currentNode.value === value){
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}


// const Node = function(value){
//   this.value = value;
//   this.next = null;
//   this.prev = null;
// }

