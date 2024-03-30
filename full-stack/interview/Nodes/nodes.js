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
  