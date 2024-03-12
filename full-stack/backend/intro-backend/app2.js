/* app.js */ 

const radius = 5;
const sideLength = 10;

// const areaFunctions = 'replace_me';
const areaFunctions = require('./shape-area.js');

const { circleArea, squareArea } = require("./shape-area.js")

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = circleArea(radius);

const areaOfSquare = squareArea(sideLength);
