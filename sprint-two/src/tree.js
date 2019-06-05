var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];  
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  const newChild = Tree(value);
  this.children.push(newChild);
  newChild.parent = this;
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  else if (this.children.length === 0) {
    return false;
  }
  else {
    let result = false;
    for (let child of this.children) {
      result = child.contains(target);
      if (result === true) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  const parent = this.parent;
  for (let i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
    }
  }
  return this;
}

treeMethods.traverse = function(cb) {
  cb(this.value);
  if (this.children.length) {
    for (let child of this.children) {
      child.traverse(cb);
    } 
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addChlid = constant
 * contains = linear
 *
 */
