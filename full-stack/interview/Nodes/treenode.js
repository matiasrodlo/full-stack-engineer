class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  }
  
  module.exports = TreeNode;

const TreeNode = require('./TreeNode');
const tree = new TreeNode(1);

console.log(tree);

// Adding a Child

class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
    addChild(child) {
      if (child instanceof TreeNode) {
        this.children.push(child);
      } else {
        this.children.push(new TreeNode(child));
      }
    }
  };
  
  module.exports = TreeNode;