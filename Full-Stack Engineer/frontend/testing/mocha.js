// Introduction

const assert = require('assert');

describe('Math', () => {
  describe('.max', () => {
    it('returns the argument with the highest value', () => {
      const minimum = 1;
      const median = 2;
      const maximum = 3;

      const result = Math.max(median, minimum, maximum);

      assert.ok(result === maximum);
    });
    it('returns -Infinity when no arguments are provided', () => {
      const negInfinity = -Infinity;

      const result = Math.max();

      assert.ok(result === negInfinity);
    });
  });
});

/* Install Mocha (package.json)
 

{
    "name": "learn-mocha-learn-mocha-install-mocha-ii",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
        "test": "mocha"
  
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "mocha": "^4.0.1"
    }
  
  }
  
  */

  //describe and it blocks

  describe('Math', () => {
    describe('.min', () => {
      it('returns the argument with the lowest value', () => {
        // Your test goes here
      });
    });
  });


  // import assert here
const assert = require('assert');

describe('+', () => {
  it('returns the sum of its arguments', () => {
assert.ok(3 + 4 === 7);

  });
});

// Setup, Exercise, and Verify


const assert = require('assert');

// Naive approach
describe('.pop', () => {
  it('returns the last element in the array [naive]', () => {
    assert.ok(['padawan', 'knight'].pop() === 'knight'); 
  });
});

// 3 phase approach
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});

// Teardown

const assert = require('assert');
const fs = require('fs');
let path, str;
 
describe('appendFileSync', () => {
  it('creates a new file with a string of text', () => {
 
   // Setup
   path = './message.txt';
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
   fs.unlinkSync(path);
 });
 
 it('creates a new file with a string of text', () => {
 
   // Setup
   path = './message.txt';
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
   fs.unlinkSync(path);


 });
});

//Hooks

const assert = require('assert');
const fs = require('fs');
let path, str;
 
describe('appendFileSync', () => {
  // Write hooks above the tests

  before(() => {
  path = './message.txt'
  });

    afterEach( () => {
   fs.unlinkSync(path);
  });

  it('writes a string to text file at given path name', () => {
 
   // Setup
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
 });
 
 it('writes an empty string to text file at given path name', () => {
 
   // Setup
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
  
 });
});

// Red To Green I

const Calculate = {
  sum(arr){
    return 6
  }
}
module.exports = Calculate;

// Refactor I

const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      
      const expectedResult = 6;
      const inputArray = [1,2,3]
      const result = Calculate.sum(inputArray)
      
      assert.strictEqual(result, expectedResult);
    });
  });
});
