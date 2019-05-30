// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes[node] !== undefined){
    this.nodes[node].forEach(function(child){
      // this.nodes[child].delete(node);
      let delIndex = this.nodes[child].indexOf(node);
      this.nodes[child].splice(delIndex, 1);
    }, this);
    delete this.nodes[node]
    
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.nodes[fromNode] && this.nodes[toNode]){
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if(this.nodes[fromNode] && this.nodes[toNode]){
    if (this.hasEdge(fromNode, toNode)){
      let toIndex = this.nodes[fromNode].indexOf(toNode);
      let fromIndex = this.nodes[toNode].indexOf(fromNode);
      this.nodes[fromNode].splice(toIndex, 1);
      this.nodes[toNode].splice(fromIndex, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this.nodes){
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


