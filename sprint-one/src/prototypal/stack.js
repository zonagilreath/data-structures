var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newStack = Object.create(stackMethods);
  newStack.top = -1; 
  return newStack;
};

const stackMethods = {}; 

stackMethods.push = function(value){
  this[++this.top] = value;
}

stackMethods.pop = function() {
  if (this.top < 0){
    return undefined;
  }
  let temp = this[this.top];
  delete this[this.top--];
  return temp;
};

stackMethods.size = function() {
  return this.top + 1;
}




