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
  
//Compare

const swap = require('./swap');

const bubbleSort = input => {
  let swapping = true;
  
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        console.log(`Swapping pair ${input[i]}, ${input[i+1]} in [${input}]`);
        swap(input, i, i + 1);
        swapping = true;
      }
    }
  }
  return input;
};

module.exports = bubbleSort;

console.log(bubbleSort([3, 2, 1]));

// review

const swap = require('./swap');

const bubbleSort = input => {
  let swapCount = 0
  let swapping = true;
  
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input;
};
bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])
console.log(bubbleSort) 

module.exports = bubbleSort;
