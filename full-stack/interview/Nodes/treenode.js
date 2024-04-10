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

  // script.js print()

  const TreeNode = require('./TreeNode');
const tree = new TreeNode(1);
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree.children[i].addChild(randomize());
  }
}

// add third-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      tree.children[i].children[j].addChild(randomize());
    }
  }
}

// pretty-print the tree
tree.print();

// Depth-first Tree Traversal

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
        return childToRemove instanceof TreeNode
        ? child !== childToRemove
        : child.data !== childToRemove;
      });
  
      if (length === this.children.length) {
        this.children.forEach(child => child.removeChild(childToRemove));
      }
    }
  
    print(level = 0) {
      let result = '';
      for (let i = 0; i < level; i++) {
        result += '-- ';
      }
      console.log(`${result}${this.data}`);
      this.children.forEach(child => child.print(level + 1));
    }
  
    depthFirstTraversal() {
      console.log(this.data);
      this.children.forEach(child => child.depthFirstTraversal());
    }
  };
  
  module.exports = TreeNode;

  // script js

  const TreeNode = require('./TreeNode');
const tree = new TreeNode(15);
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree.children[i].addChild(randomize());
  }
}

// pretty-print the tree
tree.print();
tree.depthFirstTraversal();

// Breadth-first Tree Traversal

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
      this.children = this.children.filter((child) => {
        return childToRemove instanceof TreeNode
          ? child !== childToRemove
          : child.data !== childToRemove;
      });
  
      if (length === this.children.length) {
        this.children.forEach((child) => child.removeChild(childToRemove));
      }
    }
  
    print(level = 0) {
      let result = "";
      for (let i = 0; i < level; i++) {
        result += "-- ";
      }
      console.log(`${result}${this.data}`);
      this.children.forEach((child) => child.print(level + 1));
    }
  
    depthFirstTraversal() {
      console.log(this.data);
      this.children.forEach((child) => child.depthFirstTraversal());
    }
  
    breadthFirstTraversal() {
      let queue = [this];
      while (queue.length > 0) {
        const current = queue.shift();
        console.log(current.data);
        queue = queue.concat(current.children);
      }
    }
  }
  
  module.exports = TreeNode;
  