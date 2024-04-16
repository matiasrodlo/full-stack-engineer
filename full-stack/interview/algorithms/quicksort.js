const { quicksort, partition } = require('./quicksort');

const randomize = () => Math.floor(Math.random() * 40);

let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(randomize());
}

console.log('Before quicksort:', numbers);
const sorted = quicksort(numbers);
console.log('After  quicksort:', sorted);

// The Pivot Element

const swap = require('./swap');

/* Define partition() here */
const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
  return pivot;
}

module.exports = {
  partition
};

// The Left and Right Indices

const swap = require('./swap');

const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];

  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }
    while (array[rightIndex] > pivot) {
      rightIndex--;
    }
  }
}

module.exports = {
  partition
};