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

// Parent and Child Elements

const { MinHeap, getParent, getLeft, getRight } = require('./MinHeap');

// instantiate MinHeap and assign to minHeap
const minHeap = new MinHeap();

// sample content of minHeap
minHeap.heap = [ null, 10, 13, 21, 61, 22, 23, 99 ];

// display content of minHeap
console.log(minHeap.heap);

// display the current value, its parent value, left child value and right child value
// replace null with the correct way to access the values of the parent, left child and right child
const current = 3;
const currentValue = minHeap.heap[current];
console.log(`Current value of ${current} is ${currentValue}`);
console.log(`Parent value of ${currentValue} is ${minHeap.heap[getParent(current)]}`);
console.log(`Left child value of ${currentValue} is ${minHeap.heap[getLeft(current)]}`);
console.log(`Right child value of ${currentValue} is ${minHeap.heap[getRight(current)]}`);

// MinHeap.js

class MinHeap {
    constructor() {
      this.heap = [ null ];
      this.size = 0;
    }
  
    add(value) {
      this.heap.push(value);
      this.size++;
      this.bubbleUp();
      console.log(this.heap);
    }
  
    bubbleUp() {
      console.log('Bubble Up');
    }
  }
  
  const getParent = current => Math.floor((current / 2));
  const getLeft = current => current * 2;
  const getRight = current => current * 2 + 1;
  
  module.exports = { 
    MinHeap,
    getParent,
    getLeft,
    getRight
  };
  
  // Bubble Up Part II

  class MinHeap {
    constructor() {
      this.heap = [ null ];
      this.size = 0;
    }
  
    add(value) {
      console.log(`.. adding ${value}`);
      this.heap.push(value);
      this.size++;
      this.bubbleUp();
      console.log(`added ${value} to heap`, this.heap);
    }
  
    bubbleUp() {
      let current = this.size;
      while (current > 1 && this.heap[current] < this.heap[getParent(current)]) {
        console.log('..', this.heap);
        console.log(`.. swap index ${current} with ${getParent(current)}`);
        this.swap(current, getParent(current));
        current = getParent(current);
      }
    }
  
    swap(a, b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  
  }
  
  const getParent = current => Math.floor((current / 2));
  const getLeft = current => current * 2;
  const getRight = current => current * 2 + 1;
  
  module.exports = MinHeap;
  