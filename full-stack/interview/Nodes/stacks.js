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

// Size I

const LinkedList = require('./LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  push(value) {
    this.stack.addToHead(value);
  }

  pop() {
    if (this.size > 0) {
      const value = this.stack.removeHead();
      this.size --;
      return value;      
    } else {
      console.log('Stack is empty');
    }
  }

  peek() {
    if (this.size > 0) {
      return this.stack.head.data;      
    } else {
      return null;
    }
  }
}

module.exports = Stack;

// size II

const LinkedList = require('./LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  hasRoom() {
    return (this.size < this.maxSize);  
  }
  
  isEmpty() {
    return (this.size === 0);  
  }
  
  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;      
    } else {
      throw new Error('Stack is full');
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      throw new Error('Stack is empty!');
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }
}

module.exports = Stack;
