var BinarySearchTree = function(value) {
  const bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

BinarySearchTree.prototype.insert = function(value){
  if (this.value === value) {
    return;
  }
  else if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    }
    else {
      this.left = BinarySearchTree(value);
    }
  }
  else {
    if (this.right) {
      this.right.insert(value);
    }
    else {
      this.right = BinarySearchTree(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value){
  if (this.value === value) {
    return true;
  }
  else if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    }
    else {
      return false;
    }
  }
  else {
    if (this.right) {
      return this.right.contains(value);
    }
    else {
      return false;
    }
  }
}

BinarySearchTree.prototype.depthFirstLog = function(func){
  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }
}

BinarySearchTree.prototype.breadthFirstLog = function(){
  const queue = new Queue();
  queue.enqueue(this)
  while (queue.size()){
    for(let i = queue.top; i < queue.bottom + 1; i++){
      const node = queue.dequeue();
      console.log(node.value);
      if (node.left){
        queue.enqueue(node.left);
      }
      if (node.right){
        queue.enqueue(node.right);
      }
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 * insert logn
 * contains logn
 * depthFirstLog linear
 */


