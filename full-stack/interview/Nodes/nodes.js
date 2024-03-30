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
  
  