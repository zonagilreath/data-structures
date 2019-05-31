class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.top = -1;
  }
  push(val) {
    this[++this.top] = val;
  }
  pop() {
    if (this.top < 0) {
      return undefined;
    }
    const temp = this[this.top];
    delete this[this.top--];
    return temp;
  }
  size() {
    return this.top + 1;
  }
}