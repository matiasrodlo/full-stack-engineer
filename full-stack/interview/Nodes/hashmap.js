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
  