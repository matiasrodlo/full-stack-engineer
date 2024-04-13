// vertex.js

const Edge = require('./Edge.js');

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = []
  }
  
  print() {
    const edgeList = this.edges.map(edge =>
        edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data) || [];

    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

module.exports = Vertex;

// graph.js

const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
  constructor() {
    this.vertices = []
  }
  
  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach(vertex => vertex.print());
  }
}

module.exports = Graph;

// edge.js

class Edge {
    constructor(start, end, weight = null) {
      this.start = start;
      this.end = end;
      this.weight = weight;
    }
  }
  
  module.exports = Edge;

  // Adding Vertices in graph.js

  const Edge = require('./Edge.js');
  const Vertex = require('./Vertex.js');
  
  class Graph {
    constructor() {
      this.vertices = [];
    }
  
    print() {
      this.vertices.forEach(vertex => vertex.print());
    }
  
    addVertex(data) {
      const newVertex = new Vertex(data);
      this.vertices.push(newVertex)
  
      return newVertex;
    }
  }
  
    const trainNetwork = new Graph();
    const atlantaStation = trainNetwork.addVertex('Atlanta');
    const newYorkStation = trainNetwork.addVertex('New York');
    
    trainNetwork.print();
  
  module.exports = Graph;

  // removing vertices in graph

  const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
  constructor() {
    this.vertices = [];
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }
  
  removeVertex(vertex) {
    this.vertices = this.vertices.filter(v => v !== vertex);
  }

  print() {
    this.vertices.forEach(vertex => vertex.print());
  }
}

const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');

trainNetwork.removeVertex(atlantaStation);

trainNetwork.print();

module.exports = Graph;

// Connecting Vertices with Edges

const Edge = require('./Edge.js');

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }
  
  addEdge(vertex) {
    if (vertex instanceof Vertex) {
      this.edges.push(new Edge(this, vertex));
    } else {
      throw new Error('Edge start and end must both be Vertex');
    }
  }

  print() {
    const edgeList = this.edges.map(edge =>
        edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data);

    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

module.exports = Vertex;

// removing vertex connections

const Edge = require('./Edge.js');

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  addEdge(vertex) {
    if (vertex instanceof Vertex) {
      this.edges.push(new Edge(this, vertex));
    } else {
      throw new Error('Edge start and end must both be Vertex');
    }
  }

  removeEdge(vertex) {
    this.edges = this.edges.filter(edge => edge.end !== vertex);
  }

  print() {
    const edgeList = this.edges.map(edge =>
        edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data);

    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

module.exports = Vertex;

// Weighted graphs

const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
  constructor(isWeighted = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter(v => v !== vertex);
  }

  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;

    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo, edgeWeight);
      vertexTwo.addEdge(vertexOne, edgeWeight);
    } else {
      throw new Error('Expected Vertex arguments.');
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);
      vertexTwo.removeEdge(vertexOne);
    } else {
      throw new Error('Expected Vertex arguments.');
    }
  }

  print() {
    this.vertices.forEach(vertex => vertex.print());
  }
}

const trainNetwork = new Graph(true);
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');
trainNetwork.addEdge(atlantaStation, newYorkStation, 800);

trainNetwork.print();

module.exports = Graph;

// Directed Graphs

const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
  constructor(isWeighted = false, isDirected = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
    this.isDirected = isDirected;
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter(v => v !== vertex);
  }

  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;

    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo, edgeWeight);

      if (!this.isDirected) {
        vertexTwo.addEdge(vertexOne, edgeWeight);
      }
    } else {
      throw new Error('Expected Vertex arguments.');
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);

      if (!this.isDirected) {
        vertexTwo.removeEdge(vertexOne);
      }
    } else {
      throw new Error('Expected Vertex arguments.');
    }
  }

  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach(vertex => vertex.print());
  }
}

const trainNetwork = new Graph(false, true);
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');
trainNetwork.addEdge(atlantaStation, newYorkStation);

trainNetwork.removeEdge(atlantaStation, newYorkStation);

trainNetwork.print();

module.exports = Graph;