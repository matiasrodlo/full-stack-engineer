// Introduction

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  const firstNode = new Node('2');
  console.log(firstNode.data);
  console.log(firstNode.next);
  
  module.exports = Node;

  // Set Next Node

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
    setNextNode(node) {
      this.next = node;
    }
  }
  
  const firstNode = new Node("I am an instance of a Node!");
  const secondNode = new Node('I am the next Node!');
  
  firstNode.setNextNode(secondNode);
  console.log(firstNode);
  
  module.exports = Node;
  
  // Set Next Node Validation

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  firstNode.setNextNode('This is a string, not a Node.');
  
  module.exports = Node;
  
  // Get Next Node

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
    
    getNextNode() {
      return this.next;
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  const secondNode = new Node('I am the next Node!');
  firstNode.setNextNode(secondNode);
  console.log(firstNode.getNextNode());
  
  module.exports = Node;
  
  // Nodes in JS

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error("Next node must be a member of the Node class.");
      }
    }
  
    getNextNode() {
      return this.next;
    }
  }
  
  const vanillaNode = new Node("Vanilla");
  const strawberryNode = new Node("Berry Tasty");
  const coconutNode = new Node("Coconuts for Coconut");
  
  vanillaNode.setNextNode(strawberryNode);
  strawberryNode.setNextNode(coconutNode);
  
  let currentNode = vanillaNode;
  while(currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.getNextNode();
  }
  
  module.exports = Node;

  // Constructor and Adding to Head

  const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
  }
}

module.exports = LinkedList;

// Adding to Tail

const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  
}

module.exports = LinkedList;

// Removing the Head

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
 }
}

module.exports = LinkedList;

// Printing

const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }

}

module.exports = LinkedList;

// Using the Linked List

const LinkedList = require('./LinkedList');

const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('summer')
seasons.addToHead('spring')
seasons.printList()

seasons.addToTail('fall')
seasons.addToTail('winter')
seasons.printList()

seasons.removeHead()
seasons.printList()

// Two Pointers Moving in Parallel

const nthLastNode = (linkedList, n) => {
  let pointer1 = linkedList.head;
  let pointer2 = linkedList.head;

  // Move pointer2 n nodes ahead
  for (let i = 0; i < n; i++) {
    if (pointer2 === null) {
      return null; // List is shorter than n elements
    }
    pointer2 = pointer2.getNextNode();
  }

  // Move both pointers until pointer2 reaches the end
  while (pointer2 !== null) {
    pointer1 = pointer1.getNextNode();
    pointer2 = pointer2.getNextNode();
  }

  // Pointer1 is now at the nth last node
  return pointer1;
};
 
// Pointers at Different Speeds

const findMiddle = linkedList => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  // As long as the end of the list is not reached
  while (fast !== null) {
    // Move the fast pointer at least one step
    fast = fast.getNextNode();
    // If it isn't at the end of the list
    if (fast !== null) {
      // Move both pointers forward once
      fast = fast.getNextNode();
      slow = slow.getNextNode();
    }
  }
  // At this point, the slow pointer is in the middle
  return slow;
};

// Node Class and Constructor

const Node = require("./Node");

class DoublyLinkedList {
  // Create your constructor below:
  constructor() {
    this.head = null;
    this.tail = null;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

module.exports = DoublyLinkedList;

// Add To Head

const Node = require("./Node");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Create your .addToHead() method below:
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
        if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

module.exports = DoublyLinkedList;

// Add To Tail

const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }
  
  // Create your .addToTail() method below:
  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }
  
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLinkedList;