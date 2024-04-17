const testGraph = require('./testGraph.js');

const dijkstras = (graph, startingVertex) => {
	const distances = {};
	const previous = {};

	graph.vertices.forEach((vertex) => {
		distances[vertex.data] = Infinity;
		previous[vertex.data] = null;
	});

	distances[startingVertex.data] = 0;

	return { distances, previous };
};

const results = dijkstras(testGraph, testGraph.vertices[0]);
console.log(results);

module.exports = dijkstras;
