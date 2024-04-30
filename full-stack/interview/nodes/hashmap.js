class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }
  }
  
  module.exports = HashMap;
  
  // Hashing

  class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }
  hash(key) {
    
  }
  }
  
  module.exports = HashMap;
  
  
  // Second part
 
  class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null);
  }
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }
}

module.exports = HashMap;

// comnpression

class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }
  
    hash(key) {
      let hashCode = 0;
      for (let i = 0; i < key.length; i++) {
        hashCode += hashCode + key.charCodeAt(i);
      }
      return hashCode % this.hashmap.length;
    }
  }
  
  module.exports = HashMap;
  
  const myHashMap = new HashMap(3);
  console.log(myHashMap.hash('id'));
  console.log(myHashMap.hash('id'));
  
  // Assign

  class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size).fill(null);
    }
  
    hash(key) {
      let hashCode = 0;
      for (let i = 0; i < key.length; i++) {
        hashCode += hashCode + key.charCodeAt(i);
      }
      return hashCode % this.hashmap.length;
    }
  
    assign(key, value) {
      const arrayIndex = this.hash(key);
      this.hashmap[arrayIndex] = value;
    }
  }
  
  const employees = new HashMap(3);
  employees.assign('34-567', 'Mara');
  console.log(employees.hashmap);
  
  module.exports = HashMap;
  
  // retrieve

  class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }
  
    hash(key) {
      let hashCode = 0;
      for (let i = 0; i < key.length; i++) {
        hashCode += hashCode + key.charCodeAt(i);
      }
      return hashCode % this.hashmap.length;
    }
  
    assign(key, value) {
      const arrayIndex = this.hash(key);
      this.hashmap[arrayIndex] = value;
    }
    
    retrieve(key) {
      const arrayIndex = this.hash(key);
      return this.hashmap[arrayIndex];
    }
  }
  
  module.exports = HashMap;
  
  const glossary = new HashMap(3);
  glossary.assign('semordnilap', 'Words that form different words when reversed');
  console.log(glossary.retrieve('semordnilap'));
  
// Collisions

const LinkedList = require('./LinkedList');
const Node = require('./Node');
class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size);
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    this.hashmap[arrayIndex] = value;
  }
  
  retrieve(key) {
    const arrayIndex = this.hash(key);
    return this.hashmap[arrayIndex];
  }
}

module.exports = HashMap;

const parkInventory = new HashMap(2);
parkInventory.assign('reed', 'marsh plant');
parkInventory.assign('deer', 'forest animal');

console.log(parkInventory.retrieve('reed'));
console.log(parkInventory.retrieve('deer'));

// collisions assigning

const LinkedList = require("./LinkedList");
const Node = require("./Node");
class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    }
  }
}

module.exports = HashMap;

// collisions looping

const LinkedList = require('./LinkedList');
const Node = require('./Node');
class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null)
      .map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    } 
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.getNextNode()) {
        const newNode = new Node({ key, value });
        current.setNextNode(newNode);
        break;
      }
      current = current.getNextNode();
    }
  }
}

module.exports = HashMap;

// collisions retrieving

while (current) {
    if (current.data.key === key) {
      current.data = { key, value };
    }
    if (!current.next) {
      current.next = new Node({ key, value });
      break;
    }
    current = current.next;
  }

// last implemetation

const HashMap = require('./HashMap');

const birdCensus = new HashMap(16);

birdCensus.assign('mandarin duck','Central Park Pond');
birdCensus.assign('monk parakeet','Brooklyn College');
birdCensus.assign('horned owl','Pelham Bay Park');

console.log(birdCensus.retrieve('mandarin duck'));
console.log(birdCensus.retrieve('monk parakeet'));
console.log(birdCensus.retrieve('horned owl'));
