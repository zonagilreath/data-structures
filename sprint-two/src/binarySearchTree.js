var BinarySearchTree = function(value) {
  const bst = Object.create(BinarySearchTree.prototype);
  bst.root = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

BinarySearchTree.prototype.insert = function(value){
  if (this.root === value) {
    return;
  }
  else if (value < this.root) {
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
  if (this.root === value) {
    return true;
  }
  else if (value < this.root) {
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
  func(this.root);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
