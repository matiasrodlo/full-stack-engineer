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