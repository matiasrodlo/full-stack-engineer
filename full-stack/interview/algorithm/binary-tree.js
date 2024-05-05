// binarytree.js

class BinaryTree {
    constructor(value, depth = 1) {
      this.value = value;
      this.depth = depth;
      this.left = null;
      this.right = null;
    }
  };
  
  module.exports = BinaryTree;

// script.js
  
const BinaryTree = require('./BinaryTree');

// create a BinaryTree here
const bt = new BinaryTree(15);

console.log(bt);

// Inserting a Value

class BinaryTree {
    constructor(value, depth = 1) {
      this.value = value;
      this.depth = depth;
      this.left = null;
      this.right = null;
    }
    insert(value) {
      if (value < this.value) {
        if (!this.left) {
          this.left = new BinaryTree(value, this.depth + 1);
        } else {
          this.left.insert(value);
        }
      } else {
        if (!this.right) {
          this.right = new BinaryTree(value, this.depth + 1);
        } else {
          this.right.insert(value);
        }
      }
    }
  
  };
  
  module.exports = BinaryTree;
  
  // Retrieve a Node by Value

  class BinaryTree {
    constructor(value, depth = 1) {
      this.value = value;
      this.depth = depth;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (!this.left) {
          this.left = new BinaryTree(value, this.depth + 1);
        } else {
          this.left.insert(value);
        }
      } else {
        if (!this.right) {
          this.right = new BinaryTree(value, this.depth + 1);
        } else {
          this.right.insert(value);
        }
      }
    }
  
    getNodeByValue(value) {
      if (this.value === value) {
        return this;
      } else if ((this.left) && (value < this.value)) {
          return this.left.getNodeByValue(value);
      } else if (this.right) {
          return this.right.getNodeByValue(value);
      } else {
        return null;
      }
    }
  
  };
  
  module.exports = BinaryTree;

  // Traversing a Binary Tree

  class BinaryTree {
    constructor(value, depth = 1) {
      this.value = value;
      this.depth = depth;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (!this.left) {
          this.left = new BinaryTree(value, this.depth + 1);
        } else {
          this.left.insert(value);
        }
      } else {
        if (!this.right) {
          this.right = new BinaryTree(value, this.depth + 1);
        } else {
          this.right.insert(value);
        }
      }
    }
    
    getNodeByValue(value) {
      if (this.value === value) {
        return this;
      } else if ((this.left) && (value < this.value)) {
          return this.left.getNodeByValue(value);
      } else if (this.right) {
          return this.right.getNodeByValue(value);
      } else {
        return null;
      }
    }
    
    depthFirstTraversal() {
      if (this.left) {
        this.left.depthFirstTraversal();
      }
      console.log(`Depth=${this.depth}, Value=${this.value}`);
      if (this.right) {
        this.right.depthFirstTraversal();
      }
    }
  };
  
  module.exports = BinaryTree;