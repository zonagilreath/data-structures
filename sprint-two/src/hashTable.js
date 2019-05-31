var HashTable = function() {
  this._limit = 8;
  this._formatStorage(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined){
    this._storage.get(index)[k] = v
  }else {
    this._storage.set(index, {});
    this._storage.get(index)[k] = v;
    this._occupied++
    if (this._occupied > this._limit * 0.5) {
      this._formatStorage(this._limit * 2.0);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
  this._occupied--;
  if (this._occupied < this._limit * 0.25 && this._limit > 8) {
    this._formatStorage(this._limit * 0.5);
  }
};

HashTable.prototype._formatStorage = function(newLimit) {
  this._occupied = 0;
  let oldStorage;
  if (this._storage) {
    oldStorage = this._storage;
  }
  this._limit = newLimit;
  this._storage = new LimitedArray(newLimit);
  this._storage.each(function(ele, i, arr) {
    arr[i] = {};
  });
  if (oldStorage) {
    let currHash = this;
    oldStorage.each(function(obj) {
      for (let key in obj) {
        currHash.insert(key, obj[key]);
      }
    });
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 * insert = O(1)
 * retrieve = O(1)
 * remove = O(1)
 */




