const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, visitedVertices = [start]) => {
  console.log(start.data)
  
  if (start.edges.length) {
    const neighbor = start.edges[0].end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, visitedVertices);
    }
  }
};

depthFirstTraversal(testGraph.vertices[0]);

// Depth-First Traversal (All paths)

const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, visitedVertices = [start]) => {
  console.log(start.data);

  start.edges.forEach(edge => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, visitedVertices);
    }
  });
};

depthFirstTraversal(testGraph.vertices[0]);

// Depth-First Traversal (Callbacks)

const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
  callback(start);

  start.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }
  });
};

depthFirstTraversal(testGraph.vertices[0], (vertex) => { console.log(vertex.data) });

// Breadth-First Traversal (First layer)

const testGraph = require('./testGraph.js');

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  start.edges.forEach(edge => {
    const neighbor = edge.end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor)
    }
  });
  console.log(visitedVertices)
};

breadthFirstTraversal(testGraph.vertices[0]);
