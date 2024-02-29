// shape-area.js

// Function to calculate the area of a circle
const circleArea = (radiusLength) => {
    // Area of a circle formula: π * r^2
    return Math.PI * Math.pow(radiusLength, 2);
  };
  
  // Function to calculate the area of a square
  const squareArea = (sideLength) => {
    // Area of a square formula: side^2
    return Math.pow(sideLength, 2);
  };
  
  // Exporting the functions
  module.exports = {
    circleArea,
    squareArea
  };
  