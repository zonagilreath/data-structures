var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.top = -1;
};

Stack.prototype.push = function(val) {
  this[++this.top] = val;
}

Stack.prototype.pop = function() {
  if (this.top < 0) {
    return undefined;
  }
  const temp = this[this.top];
  delete this[this.top--];
  return temp;
}

Stack.prototype.size = function() {
  return this.top + 1;
}


