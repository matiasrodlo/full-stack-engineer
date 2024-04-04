const LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.size = 0;
  }
}

module.exports = Queue;

const restaurantOrders = new Queue();
console.log(`restaurantOrders has ${restaurantOrders.size} nodes`)

// queue method

const LinkedList = require("./LinkedList");

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.size = 0;
  }
  enqueue(data) {
    this.queue.addToTail(data);
    this.size++;
    console.log(`Added ${data}! Queue size is now ${this.size}.`);
  }
}

module.exports = Queue;

const restaurantOrder = new Queue();
console.log(`restaurantOrder queue has ${restaurantOrder.size} orders.\n`);
restaurantOrder.enqueue("apple pie");
restaurantOrder.enqueue("roast chicken");
restaurantOrder.enqueue("quinoa salad");
