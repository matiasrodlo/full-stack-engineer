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
  
  