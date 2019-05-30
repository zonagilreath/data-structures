var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    const newNode = Node(value);
    if (list.head === null){
      list.head = newNode;
      list.tail = newNode;
    }else {
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    if (list.head){
      const temp = list.head.value;
      list.head = list.head.next;
      return temp;
    }
  };

  list.contains = function(target) {
    let current = list.head;
    while (current){
      if (current.value !== target){
        current = current.next;
      }else {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
