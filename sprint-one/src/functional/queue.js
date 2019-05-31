var Queue = function() {
  var someInstance = {};
  let top = 0;
  let bottom = -1;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[++bottom] = value;
  };

  someInstance.dequeue = function() {
    if (bottom < top) return undefined; 
    const temp = storage[top];
    delete storage[top++];
    return temp;
  };

  someInstance.size = function() {
    return bottom - top + 1;
  };

  return someInstance;
};
