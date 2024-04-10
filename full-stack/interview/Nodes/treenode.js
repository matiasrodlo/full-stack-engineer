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

// Removing a Child

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
    removeChild(childToRemove) {
      const length = this.children.length;
      this.children = this.children.filter(child => {
        if (childToRemove instanceof TreeNode) {
          return childToRemove !== child;
        } else {
          return child.data !== childToRemove;
        }
      });
      
      if (length === this.children.length) {
        this.children.forEach(child => child.removeChild(childToRemove));
      }
    }
  };
  
  module.exports = TreeNode;