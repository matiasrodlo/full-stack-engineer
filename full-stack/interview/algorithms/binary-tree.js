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