var BinarySearchTree = function(value) {
  const bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  bst.depth = 0;
  // bst.size = 0;
  bst.maxDepth = Number.NEGATIVE_INFINITY;
  bst.minDepth = Number.POSITIVE_INFINITY;
  bst.isRoot = true;
  return bst;
};

BinarySearchTree.prototype.insert = function(value){
  let depth = this._insert(value);
  this._updateDepths(depth);
  if (this.maxDepth > 2 * this.minDepth && this.maxDepth > 3){
    console.log(`im rebalancing at insert of ${value} with minDepth of ${this.minDepth} and maxDepth of ${this.maxDepth}`);
    this.balance();
  }
}

BinarySearchTree.prototype._updateDepths = function(depth){
  this.minDepth = Math.min(this.minDepth, depth);
  this.maxDepth = Math.max(this.maxDepth, depth);
}

BinarySearchTree.prototype._insert = function(value){
  let localDepth;
  if (this.value === value) {
    localDepth = this.depth;
  }
  if (value < this.value) {
    if (this.left) {
      localDepth = this.left._insert(value);
    }
    else {
      this.left = BinarySearchTree(value);
      this.left.isRoot = false;
      this.left.depth = this.depth + 1;
      localDepth = this.left.depth;
    }
  }
  else {
    if (this.right) {
      localDepth = this.right._insert(value);
    }
    else {
      this.right = BinarySearchTree(value);
      this.right.isRoot = false;
      this.right.depth = this.depth + 1;
      localDepth = this.right.depth;
    }
  }
  return localDepth;
}

BinarySearchTree.prototype.balance = function() {
  const nodes = this._merge();
  console.log(nodes);
  const middleIndex = Math.floor(nodes.length/2);
  this.value = nodes[middleIndex];
  this.maxDepth = Number.NEGATIVE_INFINITY;
  this.minDepth = Number.POSITIVE_INFINITY;
  this.left = this._split(nodes.slice(0, middleIndex));
  this.right = this._split(nodes.slice(middleIndex + 1, nodes.length));
}

BinarySearchTree.prototype._merge = function() {
  let sortedLeft;
  let sortedRight;
  if (this.left) {
    sortedLeft = this.left._merge();
  } else {
    sortedLeft = [];
  }
  if (this.right) {
    sortedRight = this.right._merge();
  } else {
    sortedRight = [];
  }
  return [...sortedLeft, this.value, ...sortedRight];
}

BinarySearchTree.prototype._split = function(arr) {
  if (arr.length === 0) return null;
  const middleIndex = Math.floor(arr.length / 2);
  const root = BinarySearchTree(arr[middleIndex]);
  root.isRoot = false;
  root.left = root._split(arr.slice(0, middleIndex));
  root.right = root._split(arr.slice(middleIndex + 1, arr.length));
  return root;
}

BinarySearchTree.prototype._findDepths = function(){
  let leftDepths;
  let rightDepths;
  if (this.left){
    this.left.depth = this.depth + 1;
    leftDepths = this.left._findDepths();
  }else {
    leftDepths = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
  }
  if (this.right){
    this.right.depth = this.depth + 1;
    rightDepths = this.right._findDepths();
  }else{
    rightDepths = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
  }
  if (!this.left && !this.right){
    return [this.depth, this.depth];
  }
  return [Math.min(leftDepths[0], rightDepths[0]), Math.max(leftDepths[1], rightDepths[1])];
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


/*
 * Complexity: What is the time complexity of the above functions?
 * insert logn
 * contains logn
 * depthFirstLog linear
 */
