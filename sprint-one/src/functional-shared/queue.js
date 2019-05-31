var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newQ = {};
  _.extend(newQ, queueMethods);
  newQ.top = 0;
  newQ.bottom = -1;
  return newQ;
};

var queueMethods = {
  enqueue: function(val) {
    this[++this.bottom] = val;
  },
  dequeue: function() {
    if (this.bottom < this.top) {
      return undefined;
    }
    const temp = this[this.top];
    delete this[this.top++];
    return temp;
  },
  size: function() {
    return this.bottom - this.top + 1;
  }
};


