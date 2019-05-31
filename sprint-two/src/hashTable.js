var HashTable = function() {
  this._limit = 8;
  //this._occupied = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined){
    this._storage.get(index)[k] = v
  }else {
    this._storage.set(index, {});
    this._storage.get(index)[k] = v;
    //this._occupied++
    //if (this._occupied >= this._limit * 0.75)
      //this._doubleCap();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
};

HashTable.prototype.remove = function(){
  //this.limit *= 2;
  //create LtdArr ()
  //this_.storage.each()
}


/*
 * Complexity: What is the time complexity of the above functions?
 * insert = O(1)
 * retrieve = O(1)
 * remove = O(1)
 */


