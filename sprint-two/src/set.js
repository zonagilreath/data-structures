var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  let stringified = JSON.stringify(item);
  this._storage[stringified] = true;
};

setPrototype.contains = function(item) {
  let stringified = JSON.stringify(item);
  return this._storage[stringified] || false;
};

setPrototype.remove = function(item) {
  let stringified = JSON.stringify(item);
  delete this._storage[stringified];
};


/*
 * Complexity: What is the time complexity of the above functions?
 * add = O(1)
 * contains = O(1)
 * remove = O(1)
 */
