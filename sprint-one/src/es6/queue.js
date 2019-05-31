class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.top = 0;
    this.bottom = -1;
  }
  enqueue(val) {
    this[++this.bottom] = val;
  }

  dequeue() {
    if (this.bottom < this.top) {
      return undefined;
    }
    const temp = this[this.top];
    delete this[this.top++];
    return temp;
  }

  size() {
    return this.bottom - this.top + 1;
  }
}
