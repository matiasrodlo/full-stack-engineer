const LinkedList = require('./LinkedList');

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }
  
  peek() {
    return this.stack.head.data;
  }
}

module.exports = Stack;

// Push and Pop

const LinkedList = require('./LinkedList');

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }

push(value) {
  this.stack.addToHead(value);
}

pop() {
  const value = this.stack.removeHead();
  return value;
}

  peek() {
    return this.stack.head.data;
  }
}

module.exports = Stack;
