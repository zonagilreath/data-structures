var Stack = function() {
  var someInstance = {};
  let top = -1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[++top] = value;
  };

  someInstance.pop = function() {
    if (top < 0){
      return undefined;
    }
    let temp = storage[top];
    delete storage[top--];
    return temp;
  };

  someInstance.size = function() {
    return top + 1;
  };

  return someInstance;
};
