var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.top = 0;
  this.bottom = -1;
};

Queue.prototype.enqueue = function(val) {
  this[++this.bottom] = val;
}

Queue.prototype.dequeue = function() {
  if (this.bottom < this.top) {
    return undefined;
  }
  const temp = this[this.top];
  delete this[this.top++];
  return temp;
}

Queue.prototype.size = function() {
  return this.bottom - this.top + 1;
}


