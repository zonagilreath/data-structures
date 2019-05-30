// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = new Set([]);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // const children = this[node];
  // children.forEach(function(child){
  // console.log(this[node] instanceof Set);
  // console.log(this[node]);
  if (this.nodes[node] !== undefined){
    this.nodes[node].forEach(function(child){
      // console.log(child);
      // console.log(this[child]);
      // console.log(this);
      this.nodes[child].delete(node);
    }, this);
    delete this.nodes[node]
    
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].has(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.nodes[fromNode] && this.nodes[toNode]){
    this.nodes[fromNode].add(toNode);
    this.nodes[toNode].add(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if(this.nodes[fromNode] && this.nodes[toNode]){
    if (this.hasEdge(fromNode, toNode)){
      this.nodes[fromNode].delete(toNode);
      this.nodes[toNode].delete(fromNode);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this.nodes){
    console.log(node);
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


