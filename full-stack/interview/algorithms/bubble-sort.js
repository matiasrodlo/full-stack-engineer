const swap = require('./swap');

const bubbleSort = input => {
  let swapping = true;
  
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      
    }
  }
  return input;
};

module.exports = bubbleSort;

//swap

const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne] 
    arr[indexOne] =  temp;
  }
  
  module.exports = swap;
  