// import MinHeap class
const MinHeap = require('./MinHeap');

// instantiate a MinHeap class
const minHeap = new MinHeap();

// helper function to return a random integer
const randomize = () => Math.floor(Math.random() * 40); 

// populate minHeap with random numbers
for (let i = 0; i < 6; i++) {
  const num = randomize();
  console.log(`.. Adding value ${num}`);
  minHeap.add(num);
  console.log('Content of min-heap', minHeap.heap);
}

// return the minimum value in the heap until heap is empty
console.log('\n');
for (let i = 0; i < 6; i++) {
  console.log(`.. Removing minimum value ${minHeap.popMin()}`);
  console.log('Content of min-heap', minHeap.heap);
}

// MinHeap Class

class MinHeap {
    constructor() {
      this.heap = [null];
      this.size = 0;
    }
  }
  module.exports = MinHeap;

// Script.js

const MinHeap = require('./MinHeap');
const minHeap = new MinHeap();

console.log(minHeap.heap)

// Bubble Up Part I

class MinHeap {
    constructor() {
      this.heap = [ null ];
      this.size = 0;
    }
    add(value) {
      this.heap.push(value)
      this.size++
      this.bubbleUp()
    }
      bubbleUp() {
      console.log('Bubble Up'); 
  }
  }
  module.exports = MinHeap;
  
  // scriptjs

const MinHeap = require('./MinHeap');

// instantiate MinHeap and assign to minHeap
const minHeap = new MinHeap();
// call add method
minHeap.add(42)

// display content of minHeap
console.log('Content of heap', minHeap.heap);