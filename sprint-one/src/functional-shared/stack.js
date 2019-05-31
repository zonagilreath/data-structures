var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newStack = {};
  newStack.top = -1;
  _.extend(newStack, stackMethods);
  return newStack;
};

const stackMethods = {
  push: function(value){
    this[++this.top] = value;
  },
  pop: function(){
    if (this.top < 0){
      return undefined;
    }
    let temp = this[this.top];
    delete this[this.top--];
    return temp;
  },
  size: function(){
    return this.top + 1;
  }
};

