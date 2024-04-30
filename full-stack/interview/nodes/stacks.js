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

// review 

const Stack = require('./Stack');

// 1. Define an empty pizza stack with a maxSize of 6
const pizzaStack = new Stack(6);

// 2. Add pizzas as they are ready until we fill up the stack

for (let i = 1; i < 7; i++) {
  pizzaStack.push('Pizza #' + i);
}

// 3. Try pushing another pizza to check for overflow
try {
  pizzaStack.push('Pizza #7');
} catch(e) {
  console.log(e);
}

// 4. Peek at the pizza on the top of stack and log its value
console.log('The first pizza to deliver is', pizzaStack.peek());


// 5. Deliver all the pizzas from the top of the stack down
for (let i=0; i<6; i++) {
  pizzaStack.pop();
}


// 6. Try popping another pizza to check for empty stack
try {
  pizzaStack.pop();
} catch(e) {
  console.log(e);
}
