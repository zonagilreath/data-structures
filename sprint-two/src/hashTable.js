var HashTable = function() {
  this._limit = 8;
  this._formatStorage(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  const subIndex = this._hash(k);
  console.log(this._storage.get(index));
  this._storage.get(index)[subIndex] = [k, v];
  this._occupied++
  if (this._occupied > this._limit * 0.5) {
    this._formatStorage(this._limit * 2.0);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  const subIndex = this._hash(k);
  if (this._storage.get(index)[subIndex] !== undefined) {
    return this._storage.get(index)[subIndex][1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  const subIndex = this._hash(k);
  this._storage.get(index)[subIndex] = undefined;
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
  for (let i = 0; i < this._limit; i++) {
    this._storage.set(i, new Array(7));
  }
  if (oldStorage) {
    oldStorage.each(function(bucket) {
      for (let tuple of bucket) {
        if (tuple !== undefined) {
          this.insert(tuple[0], tuple[1]);
        }
      }
    }.bind(this));
  }
}

HashTable.prototype._hash = function(str) {
   var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % 7;
}

/*
 * Complexity: What is the time complexity of the above functions?
 * insert = O(1)
 * retrieve = O(1)
 * remove = O(1)
 */




